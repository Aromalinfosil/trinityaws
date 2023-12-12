import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, A11y, Autoplay } from 'swiper';
import { displayMoney } from '../../helpers/utils';
import productsData from '../../data/productsData';
import { useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";


const Pdoor = () => {

    const featuredProducts = productsData.filter(item => item.text === 'pdoor');
    const [showDescription, setShowDescription] = useState(false);
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
            const { id, images, title, tagline, info, finalPrice, originalPrice, rateCount, path } = item;
            const newPrice = displayMoney(finalPrice);
            const oldPrice = displayMoney(originalPrice);

            return (
            <div class="">
			<div class="product-googles-info googles">
			<div class="men-pro-item">
			<div class="men-thumb-item">
            <figure className="img-fluid5">
            <Link to={`${path}${id}`}>
            <img src={images[0]} alt="product-img" />
            </Link>
            </figure>
                                
			<div class="men-cart-pro">
			<div class="inner-men-cart-pro">
			<div  class="link-product-add-cart" > <Link to={`${path}${id}`}style={{ fontSize: '24px',fontFamily:'Roboto, sans-serif' }}>Buy now</Link></div>
			</div>
			</div>
			<span class="product-new-top">New</span>
			</div>
			<div class="item-info-product">
			<div class="info-product-price">
			<div class="grid_meta">
			<div class="product_price">
            <h3 className="">
            <Link to={`${path}${id}`}>{title}</Link>
            </h3>

            <h5 className="product-new-top">{info}</h5>	
            <div className="separator"></div>	
                   		
			<div class="grid-price mt-2 ">
			<span class="money ">{newPrice} &nbsp;
            <small><del>{oldPrice}</del></small></span>
			</div>
            <p class="product-description text-center">
            {showDescription ? (
            <>
            {tagline}<br/>
            <button style={{ backgroundColor: "#855205",border: "none", color: "white",  padding: "15px 32px",textAlign: "center",borderRadius:"20px"}} onClick={toggleDescription}>Details</button>
            </>
            ) : (
            <button style={{ backgroundColor: "#0B664E",border: "none", color: "white",  padding: "15px 32px",textAlign: "center",borderRadius:"20px"}} onClick={toggleDescription}> Details</button>
            )}
            </p>
			</div>							
			</div>
										
			</div>
            </div></div></div></div>                                 
            );
            })
            }
            </div>
            );
            };

export default Pdoor;