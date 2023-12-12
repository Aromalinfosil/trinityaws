import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const TopProducts1 = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      // Fetch product data from the backend
      axios.get('http://65.1.134.51:3001/product')
        .then(response => {
          setProducts(response.data.reverse());
         
          
          console.log("productfetched") 
        })
        .catch(error => {
          console.log(error);
          console.log("data not fetched")
        });
    }, []);
  
    return (
        <div className="wrapper products_wrapper">
            {products.slice(0, 4).map(product => (
                <ProductCard
                    key={product.id} // Make sure to include a key for each mapped element
                    product={product}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    model_no={product.model_no}
                  
                     // Pass the product data to the ProductCard component
                />
            ))}
        </div>
    );
};

export default TopProducts1;
