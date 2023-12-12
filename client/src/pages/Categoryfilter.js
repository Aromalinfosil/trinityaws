import React, { useContext, useEffect, useState,useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import ProductCard from '../components/product/ProductCard';
import FilterBar from '../components/filters/FilterBar';
import { BsExclamationCircle } from 'react-icons/bs';
import EmptyView from '../components/common/EmptyView';
import filtersContext from '../contexts/filters/filtersContext';
import Header from '../components/common/Header';

function Categoryfilter() {
    
    const { allProducts } = useContext(filtersContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { category } = useParams();
    const [isFilterBarFixed, setIsFilterBarFixed] = useState(false);
    const filterBarRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log("Selected Category:", category);
      };

    useEffect(() => {
        fetchRelatedProducts();
    }, [category]);

    const fetchRelatedProducts = () => {
        // Make an API request to fetch related products based on the category
        axios.get(`http://65.1.134.51:3001/product?category=${category}`)
            .then(response => {
                const products = response.data;
                setRelatedProducts(products);
            })
            .catch(error => {
                console.error('Error fetching related products:', error);
            });
    };
  
    return (

       <>
       <Header />
        
        <br />
        <br />
        <br />
        <br />
        <section id="all_products" className="allp">
      
          <div ref={filterBarRef}>
            <FilterBar fixed={isFilterBarFixed}
             onSelectCategory={handleCategorySelect} />
          </div>
            {/* Display the selected category */}
            {selectedCategory && (
            <div className="selected-category">
              Selected Category: {selectedCategory}
            </div>
          )}
                 <div className="container">
            {allProducts.length ? (
              <div className="wrapper products_wrapper">
                {relatedProducts
                  .filter(item => item.category === category) // Filter products by category
                     .map(item => (
                        
                             <ProductCard {...item} />
                       
                     ))}
              </div>
            ) : (
              <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />
            )}
          </div>
  
  
        </section>
      </>
        
  )
}

export default Categoryfilter