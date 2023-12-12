import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Door from '../components/sliders/Door';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import TopProducts1 from '../components/product/TopProducts1';
import Services from '../components/common/Services';
import { Link } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import { useContext } from 'react';
import { displayMoney } from '../helpers/utils';
import cartContext from '../contexts/cart/cartContext';
import useActive from '../hooks/useActive';
import Header from '../components/common/Header';
const Dining = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);
    return (
        
        <main> <Header /><br/><br/><br/><br></br><br></br><br></br><br></br><br></br>
     
						<div class="middle-text-info3 ">
                        <div className='color-box'>
                            <h1>your Home is more secure now</h1>
							
                            </div></div><br></br><br></br>
                            <div class="a21"><center>Shop by Categories
</center></div>

                <div class="row text-center mt-5">
                <div class="col-lg-3 col-sm-6 serv-block">
                <a href="#services">
                <div class="services-wthree-grid">
                <img src="../ass/images/33.jpg" class="img-fluid" alt="" />
                </div>
                <div class="popular-wthree-text">
                <a href='Cdoors'><h5>Classic Doors</h5></a>
                </div>
                </a>
                </div>
                <div class="col-lg-3 col-sm-6 serv-block mt-sm-0 mt-4">
                    
                        <div class="services-wthree-grid">
                        <img src='../ass/images/33.jpg' data-zoom-image="../ass/images/33.jpg"/>
                            {/* <img src="../ass/images/33.jpg" class="img-fluid" alt="" /> */}
                        </div>
                        <div class="popular-wthree-text">
                         <a href='/Pdoors'>  <h5>Pooja Doors</h5></a> 
                        </div>
                    
                </div>
                <div class="col-lg-3 col-sm-6 serv-block mt-lg-0 mt-4">
                    <a href="#services">
                        <div class="services-wthree-grid">
                            
                            <img src="../ass/images/33.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="popular-wthree-text">
                          <a href='/Edoors'> <h5>Entrance Doors</h5></a> 
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-sm-6 serv-block mt-lg-0 mt-4">
                <a href="#services">
                <div class="services-wthree-grid">
                <img src="../ass/images/33.jpg" class="img-fluid" alt="" />
                </div>
                        <div class="popular-wthree-text">
                           <a href='/Cadoors'><h5>Carving Doors</h5></a> 
                        </div>
                    </a>
                </div>
            </div><br/><br/><br/>

                           
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="../ass/images/bn6.png" class="d-block w-100" alt="..."/>
    </div>
   
   
  </div>
</div>


  






<section id="featured" className="section">
<div class="a21"><center>New Arrivals...
</center></div><br></br>
                   
                    <Door />
               
            </section>
        </main>
    );
};

export default  Dining;