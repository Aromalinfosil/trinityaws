
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

const SearchBar = () => {
  const { isSearchOpen, toggleSearch } = useContext(commonContext);
  const searchRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const closeSearch = () => {
    toggleSearch(false);
    setSearchResults([]);
  };

  useOutsideClose(searchRef, closeSearch);
  useScrollDisable(isSearchOpen);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async (query) => {
    try {
      if (query.trim() !== '') {
        const response = await axios.get(`/search/product?category=${query}`);
        setSearchResults(response.data);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearching = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    fetchSearchResults(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const selectedResult = searchResults[activeIndex];
      if (selectedResult) {
        const { category } = selectedResult;
        toggleSearch(false);
        navigate(`/${category}`);
      }
    }
  }

  useEffect(() => {
    setActiveIndex(0); 
  }, [searchResults]);

  return (
    <>
      {isSearchOpen && (
        <div id="searchbar" className="backdrop">
          <div className="searchbar_content" ref={searchRef}>
            <div className="search_box">
              <input
                type="search"
                className="input_field"
                placeholder="Search for product..."
                onChange={handleSearching}
                onKeyDown={handleKeyPress}
                style={{ color: 'black' }}
              />
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const selectedResult = searchResults[activeIndex];
                  if (selectedResult) {
                    const { id, category } = selectedResult;
                    toggleSearch(false);
                    navigate(`/${category}`);
                  }
                }}    
                disabled={searchResults.length === 0}
              >
                <AiOutlineSearch />
              </button>
            </div>
            {searchResults.length !== 0 && (
  <div className="search_results">
    {searchResults.slice(0, 1).map((item, index) => { 
      const { id, category } = item;
      const isActive = index === activeIndex;
      return (
        <Link
          to={`/${category}`}
          onClick={closeSearch}
          key={id}
          className={isActive ? 'active' : ''}
        >
          {category}
        </Link>
      );
    })}
  </div>
)}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;