import React, { useContext, useState,useEffect } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';
import axios from 'axios';

const ProductCard = ({ product, id, image, name, price, model_no, description}) => {
   
  console.log(product)  

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

  // Handling Add-to-cart


  return (
    <>
     
      <div   class="card">
			<div class="product-googles-info googles " style={{ borderWidth: "2px",width:"300px" }}>
			<div class="men-pro-item">
		  <div class="">
      <center> <figure className="">
      <a href ={`/product-details/${id}`}>
      <img src={`http://65.1.134.51:3001/uploads/${image}`} alt="product-img" />
      </a>
      </figure></center> 
      <div class="">
      <div class="">
      <br></br>
			<div  class="" >
      <center>  <button style={{ backgroundColor: "#855205",border: "none", color: "white",  padding: "12px 30px",textAlign: "center",borderRadius:"20px"}}  ><Link to={`/product-details/${id}`}><font color="#fff">Add to Cart</font></Link></button></center> 
      </div>			
      </div>
      </div>
      </div>
             
        </div>
        </div><div class="container">
				<div class="item-info-product">
				<div class="info-product-price">
				<div class="grid_meta">
        <br></br>
				<div class="product_price">
        <h3 className="">
        <a href={`http://65.1.134.51:3001/product-details/${id}`}style={{ fontSize: '24px',fontFamily:'Roboto, sans-serif' }}></a>
        </h3>
        <div class='modelm'>         
        <h4 className=""style={{ fontSize: '25px',fontFamily:'Poppins, sans-serif' }}><font color="#09470b">Model No: {model_no}</font></h4>
        <h3 className=""style={{ fontSize: '15px',fontFamily:'Poppins, sans-serif' }}>Dimension: {description}</h3>
        </div> 
                  
      <div className="separator"></div>	
      </div>	
		  <div class="grid-price mt-2">
      <center>
		  <span class="money ">{price} &nbsp;
      </span></center>
			</div>
      <p class="product-description text-center">        
      </p>
			</div>
			</div>
			</div></div></div> 
        </>
       );
       };

export default ProductCard;
