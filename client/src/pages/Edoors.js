import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Bed from '../components/sliders/Bed';
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
const Edoors = (props) => {

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
        
         <main> <Header /><br/><br/><br/>
     
     <div class="middle-text-info5 ">
                        <div className='color-box'>
                            <h1>your Home is more secure now</h1>
							
                            </div></div><br></br><br></br>
                            <div class="a21"><center>Shop by Categories
</center></div><br></br>

<div class="row text-center mt-5">
                <div class="col-lg-4 col-sm-6 serv-block">
                    <a href="#services">
                        <div class="services-wthree-grid">
                            <img src="../ass/images/bd.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="popular-wthree-text">
                            <a href='Abeds'><h5>Doors</h5></a>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 serv-block mt-sm-0 mt-4">
                    
                        <div class="services-wthree-grid">
                        <img src='../ass/images/bd2.jpg' data-zoom-image="../ass/images/33.jpg"/>
                            {/* <img src="../ass/images/33.jpg" class="img-fluid" alt="" /> */}
                        </div>
                        <div class="popular-wthree-text">
                         <a href='/Pdoors'>  <h5>Queen Bed</h5></a> 
                        </div>
                    
                </div>
                <div class="col-lg-4 col-sm-6 serv-block mt-lg-0 mt-4">
                    <a href="#services">
                        <div class="services-wthree-grid">
                            
                            <img src="../ass/images/bd1.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="popular-wthree-text">
                          <a href='/Edoors'> <h5>Single Bed</h5></a> 
                        </div>
                    </a>
                </div>
                
            </div><br/><br/>
            {/* <div class="">
					<div class="  ">
						<div class="middle-text-info6 ">
							</div></div></div> */}
                           
<section id="featured" className="section">
<div class="a21"><center>New Arrivals...
</center></div>
                   
                    <Bed />
               
            </section>
        </main>
    );
};

export default Edoors;