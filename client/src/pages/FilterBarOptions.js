import React, { useContext,useState,useEffect } from 'react';
import filtersContext from '../../contexts/filters/filtersContext';
import { sortMenu } from '../../data/filterBarData';
import { displayMoney } from '../../helpers/utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FilterBarOptions = () => {

    const {
        sortedValue,
        setSortedValue,
        updatedBrandsMenu,
        updatedCategoryMenu,
        handleBrandsMenu,
        handleCategoryMenu,
        handlePrice,
        selectedPrice: { price, minPrice, maxPrice },
        mobFilterBar: { isMobSortVisible, isMobFilterVisible },
        handleMobSortVisibility,
        handleMobFilterVisibility,
        handleClearFilters,
    } = useContext(filtersContext);
  

    const displayPrice = displayMoney(price);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/filter")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => setCategories(data))
          .catch((error) => {
            console.error("Error fetching categories: ", error);
            setError(error.message);
          });
      }, []);
      const navigate = useNavigate();
      const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event, category) => {
    const updatedCheckedItems = { ...checkedItems, [category]: event.target.checked };
    setCheckedItems(updatedCheckedItems);

    if (event.target.checked) {
      navigate(`/category/${category}`);
    }
  };


    return (
        <>

                <div className="filter_block">
  <h4>Category</h4>
  <ul className="filter_menu">
  {categories.map((category, index) => (
          <li key={index} className="filter_btn">
            <input
              type="checkbox"
              checked={checkedItems[category] || false}
              onChange={(event) => handleCheckboxChange(event, category)}
            />
            {category}
          </li>
        ))}
  </ul>
</div>

                {/* Filter by Price */}
                <div className="filter_block">
                    <h4>Price</h4>
                    <div className="price_filter">
                        <p>{displayPrice}</p>
                        <input
                            type="range"
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={handlePrice}
                        />
                    </div>
                </div>

            
        </>
    );
};

export default FilterBarOptions;