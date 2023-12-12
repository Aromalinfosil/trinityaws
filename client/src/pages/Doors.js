import React, { useContext, useEffect, useState } from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Door from '../components/sliders/Door';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import TopProducts1 from '../components/product/TopProducts1';
import Services from '../components/common/Services';
import { IoMdStar } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

import { displayMoney } from '../helpers/utils';
import cartContext from '../contexts/cart/cartContext';
import useActive from '../hooks/useActive';
import Header from '../components/common/Header';
import RelatedSlider from '../components/sliders/RelatedSlider';
import axios from 'axios';
import useDocTitle from '../hooks/useDocTitle';

const Doors = () => {

    useDocTitle('Product Details');

    const { handleActive, activeClass } = useActive(0);

    const { addItem } = useContext(cartContext);

    const { id } = useParams();
    const [product, setProduct] = useState([null]);
    
    const {  ratings, rateCount } = product;



   
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [name, setName] = useState([]);
    const [category, setCategory] = useState([]);
    const[model_no,setModel_no] =useState([]);


   
    useEffect(() => {
        getProduct();
      }, []);
    
      function getProduct() {
        axios.get(`http://65.1.134.51:3001/product/${id}`)
          .then((response) => {
            console.log(response.data);
            setProduct(response.data);
            setName(response.data.name);
            setCategory(response.data.category);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setImage(response.data.image);
            setModel_no(response.data.model_no)
          })
          .catch((error) => {
            console.error('Error fetching product:', error);
            console.log("Product not found");
          });
      }


    return (
        
        <main> <Header /><br/><br/><br/><br></br><br></br><br></br><br></br><br></br>
     
						<div class="middle-text-info4 ">
                        <div className='color-box'>
                            <h1>your Home is more secure now</h1>
							
                            </div></div><br></br><br></br>
                            <div class="a21"><center>Shop by Categories
</center></div>

<div class="row text-center mt-5">
                <div class="col-lg-3 col-sm-6 serv-block">
                    <a href="#services">
                        <div class="services-wthree-grid">
                            <img src="../ass/images/Door4.png" class="img-fluid" alt="" />
                        </div>
                        <div class="popular-wthree-text">
                            <a href='Cdoors'><h5>Classic Doors</h5></a>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 serv-block mt-sm-0 mt-4">
                    
                        <div class="services-wthree-grid">
                        <img src='../ass/images/Door27.png' data-zoom-image="../ass/images/33.jpg"/>
                            {/* <img src="../ass/images/33.jpg" class="img-fluid" alt="" /> */}
                        </div>
                        <div class="popular-wthree-text">
                         <a href='/Pdoors'>  <h5>Pooja Doors</h5></a> 
                        </div>
                    
                </div>
                <div class="col-lg-3 col-sm-6 serv-block mt-lg-0 mt-4">
                    <a href="#services">
                        <div class="services-wthree-grid">
                            
                            <img src="../ass/images/Door19.png" class="img-fluid" alt="" />
                        </div>
                        <div class="popular-wthree-text">
                          <a href='/Edoors'> <h5>Entrance Doors</h5></a> 
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 serv-block mt-lg-0 mt-4">
                    <a href="#services">
                        <div class="services-wthree-grid">
                            <img src="../ass/images/Door17.png" class="img-fluid" alt="" />
                        </div>
                        <div class="popular-wthree-text">
                           <a href='/Cadoors'><h5>Carving Doors</h5></a> 
                        </div>
                    </a>
                </div>
            </div><br/><br/><br/>

                           
                            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../ass/images/bn6.png" class="d-block w-100" alt="..."/>
    </div>
   
   
  </div>
</div> */}







<section id="featured" className="section">
<div class="a21"><center>New Arrivals...
</center></div><br></br>
                   
<RelatedSlider category="Door" />

               
            </section>
        </main>
    );
};

export default Doors;