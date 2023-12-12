import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import axios from 'axios'; // Import axios
import ProductCard from '../product/ProductCard';

import 'swiper/scss';
import 'swiper/scss/pagination';
import productsData from '../../data/productsData';

const RelatedProduct = ({ category }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);

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
        {/* <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            breakpoints={{
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 4,
                },
            }}
            className="related_swiper"
        >
            {relatedProducts
            .filter(item => item.category === category) // Filter products by category
            .map(item => (
                <SwiperSlide key={item.category}>
                    <ProductCard {...item} />
                </SwiperSlide>
            ))}
        </Swiper> */}

 
        

 
    <div className="wrapper products_wrapper">
        {relatedProducts
        .filter(item => item.category === category) // Filter products by category
        .map(item => (
        <SwiperSlide key={item.category}>
        <ProductCard {...item} />
        </SwiperSlide>
        ))}
    </div>




 


        </>
        
    );
};

export default RelatedProduct;