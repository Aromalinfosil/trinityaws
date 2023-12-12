import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import Header from '../components/common/Header';
import useDocTitle from '../hooks/useDocTitle';
import FilterBar from '../components/filters/FilterBar';
import ProductCard from '../components/product/ProductCard';
import Services from '../components/common/Services';

import filtersContext from '../contexts/filters/filtersContext';
import EmptyView from '../components/common/EmptyView';
import axios from 'axios';

   const AllProducts = () => {
  useDocTitle('All Products');

  const { allProducts } = useContext(filtersContext);
  const [isFilterBarFixed, setIsFilterBarFixed] = useState(false);
  const filterBarRef = useRef(null);
  const servicesRef = useRef(null);

      useEffect(() => {
      const handleScroll = () => {
      const filterBar = filterBarRef.current;
      const services = servicesRef.current;

         if (filterBar && services) {
        const filterBarRect = filterBar.getBoundingClientRect();
        const servicesRect = services.getBoundingClientRect();

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const filterBarTopOffset = filterBarRect.top + scrollTop;
        const servicesTopOffset = servicesRect.top + scrollTop;

        setIsFilterBarFixed(filterBarTopOffset <= scrollTop && scrollTop < servicesTopOffset);
      }
      };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // 
        axios.get('http://65.1.134.51:3001/product')
       .then(response => {
        setProducts(response.data);
        setProducts(response.data.map(product => ({ ...product })));  
        console.log("productfetched") 
        })
       .catch(error => {
        console.log(error);
        console.log("data not fetched")
      });
      }, []);


  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <section id="all_products" className="allp">
        <div ref={filterBarRef}>
          <FilterBar fixed={isFilterBarFixed} />
        </div>

        <div className="container">
          {allProducts.length ? (
            <div className="wrapper products_wrapper">
               {products.map(product => (
                <ProductCard
                key={product.id} // Make sure to include a key for each mapped element
                product={product}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                model_no={product.model_no} // Pass the product data to the ProductCard component
                  />

                  ))}
                   </div>
          ) : (
            <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />

            
          )}
        </div>

      </section>
    </>
  );
};

export default AllProducts;
