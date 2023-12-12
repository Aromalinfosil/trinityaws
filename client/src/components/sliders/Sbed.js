import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, A11y, Autoplay } from 'swiper';
import { displayMoney } from '../../helpers/utils';
import productsData from '../../data/productsData';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";


const Sbed = () => {
    
    const featuredProducts = productsData.filter(item => item.tag === 'sbed');


    const [showDescription, setShowDescription] = useState(false);

    // Handling Add-to-cart

  
  
    const toggleDescription = () => {
      setShowDescription((prevShowDescription) => !prevShowDescription);
    };

    return (
        <div
            modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 70,
            modifier: 3,
            slideShadows: false,
            }}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
            breakpoints={{
            768: {
            slidesPerView: 2,
            spaceBetween: 200
            },
            992: {           
            },
            }}
            className="wrapper products_wrapper"
            >
            {
            featuredProducts.map((item) => {
            const { id, images, title, finalPrice, originalPrice,tagline, path, model,dimension, info } = item;
            const newPrice = displayMoney(finalPrice);
            const oldPrice = displayMoney(originalPrice);

            return (
            <div class="card">
			<div class="product-googles-info googles " style={{ borderWidth: "2px",width:"300px" }}>
			<div class="men-pro-item">
			<div class="">

            <figure className="">
            <Link to={`${path}${id}`}>
            <img src={images[0]} alt="product-img" />
            </Link>
            </figure>

        
								
			<br></br>
			<div  class="nhj" >
            <center>  <button style={{ backgroundColor: "#855205",border: "none", color: "white",  padding: "12px 30px",textAlign: "center",borderRadius:"20px"}}  ><Link to={`${path}${id}`}><font color="#fff">Add to Cart</font></Link></button></center> 
            </div>
									
								
									
			</div><div class="container">
			<div class="item-info-product">
			<div class="info-product-price">
			<div class="grid_meta">
            <br></br>
			<div class="product_price">
            <h3 className="">
            <Link to={`${path}${id}`}style={{ fontSize: '24px',fontFamily:'Roboto, sans-serif' }}></Link>
            </h3>
                   
            <div class='modelm'>
            <h4 className=""style={{ fontSize: '25px',fontFamily:'Poppins, sans-serif' }}><font color="#09470b">Item: {title}</font></h4>
            <h4 className=""style={{ fontSize: '16px',fontFamily:'Poppins, sans-serif' }}>Model No: {model}</h4>
            <h3 className=""style={{ fontSize: '15px',fontFamily:'Poppins, sans-serif' }}>Dimension: {dimension}</h3>  {/* <h5 className="product-new-top">{info}</h5>	 */}
            </div><div className="separator"></div>	
            </div>	
		    <div class="grid-price mt-2">
            <center>
		    <span class="money ">{newPrice} &nbsp;
            <small><del>{oldPrice}</del></small></span></center>
		    </div>
            <p class="product-description text-center">        
            </p>
		    </div>							
		    </div>							
		    </div></div></div></div></div>
            );
            })
            }
            </div>
            );
            };

export default Sbed;




