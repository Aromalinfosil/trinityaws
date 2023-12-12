import React, { useState, useEffect } from 'react';

import CookieConsent from "react-cookie-consent";
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Pdoor from '../components/sliders/Pdoor';
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
import images1 from '../images/Untitled1.png';
import images2 from '../images/Untitled3.png';
import images3 from '../images/bng.png'



const Home = (props) => {
  

  
    const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id)
;

        setTimeout(() => {
            handleActive(false);
        }, 8000);
    };

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);
    
    return (
      
        <main >
            
        <Header />
      
      
         {/* <div class="modal moding fade" id="myModal" tabindex="1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
 <div class="abtn"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
    <div class="modal-content">
      <div class="">
    
      
      </div>
      <div class="">
      
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              
              <img class="d-block w-100" src="./poster/5053774.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./poster/asw.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./poster/ased.jpg" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>

    </div>
  </div> */}
  
{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox ">
    <div class="carousel-item active">
        <img src={images1} alt='images' style={{ width: '100%' }}></img>
     
  <div class="green-box">
    <h3>Traditional Teak Wood Furnitures</h3>
  </div>
</div>
<div class="carousel-item item2">
<img src={images2} alt='images' style={{ width: '100%' }}></img>
  <div class="green-box">
    <h3>Best Quality Furnitures at Your Door Step</h3>
  </div>
</div>
<div class="carousel-item item3">
<img src={images3} alt='images' style={{ width: '100%' }}></img>
  <div class="green-box">
    <h3>Unique Designs with Amazing Customization</h3>
  </div>
</div>
</div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

</div> */}
 




























  
 <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">

      <div class="item active">
        <img src={images1} alt="Los Angeles" style={{width:"100%"}}/>
        <div class="carousel-caption">
        <div class="green-box">
    <h3>Unique Designs with Amazing Customization</h3>
  </div>
          
        </div>
      </div>

      <div class="item">
        <img src={images2} alt="Chicago" style={{width:"100%"}}/>
        <div class="carousel-caption">
        
              
  <div class="green-box1">
    <h3>Traditional Teak Wood Furnitures</h3>
  </div>
    
        </div>
      </div>
    
      <div class="item">
        <img src={images3} alt="New York" style={{width:"100%"}}/>
        <div class="carousel-caption">
           <div class="green-box">
    <h3>Best Quality Furnitures at Your Door Step</h3>
  </div>
        
        </div>
      </div>
  
    </div>

    
   
  </div>



<br></br><br></br><br></br><center><h5 class="a21" >Your  Home  Our  Design</h5></center><br></br><br></br><br></br>

<div  class="row">
    <div class="col-sm-4">
    <div class="content1">
  
    <div class="content-overlay"></div>
    <img src="../ass/images/y1.jpg" class='h' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div> </div> </div>
      

<div class="col-sm-4">
<div class="content1">
  
  <div class="content-overlay"></div>
    <img src="../ass/images/y3.jpg" class='w' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
   </div></div>
   <br></br> 
   <div class="content1">
  
  <div class="content-overlay"></div>
    <img src="../ass/images/y4.jpg" class='w' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
   </div></div>
</div>
<div class="col-sm-4">
<div class="content1">
<div class="content-overlay"></div>
    <img src="../ass/images/y2.jpg" class='h' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div> </div> </div>

  {/* <div class="card-columns">


    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>
    </div>
 
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    
    </div>

 
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>

  
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>

  
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>

  
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div> */}

    



</div>

<section class="banner-bottom-wthreelayouts py-lg-5 py-3">
		<div class="container-fluid" >
			<div class="inner-sec-shop px-lg-4 px-3">
			<br></br><br></br><br></br><br></br><h5 class="a21" ><center>Product Categories</center></h5><br></br><br></br><br></br>
				<div class="row">
				
					<div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
							<div class="men-pro-item">
								<div class="men-thumb-item">
                                <div class="">
                              
                                <a href='/Door'><img src="../ass/images/door.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3><font color="black">Door</font></h3></a>
									</div></div></div></div>
									</div>
                                
								
											
										
									
									
						
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
							<div class="men-pro-item">
								<div class="men-thumb-item">
							<a href='/Sofa'>	<img src="../ass/images/sofa.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3><font color="black">Sofa</font></h3></a>
									</div></div></div></div>
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
							<div class="men-pro-item">
								<div class="men-thumb-item">
								<a href='/Dining Set'><img src="../ass/images/dtb.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3><font color="black">Dining Tables</font></h3></a>	
									</div></div></div></div>
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
							<div class="men-pro-item">
								<div class="men-thumb-item">
								<a href='/Wall Mirror'><img src="../ass/images/mir.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Wall Mirror</h3></a>
									</div></div></div></div>
				<div class="row mt-lg-3 mt-0">
		
            <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
						<div class="men-pro-item">
						<div class="men-thumb-item">
						<a href='/Chairs'>	<img src="../ass/images/chair.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
            <h3>Chairs</h3></a>
						</div></div></div></div>

                                    
            <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
						<div class="men-pro-item">
						<div class="men-thumb-item">
						<a href='/Clock'>	<img src="../ass/images/clock.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
            <h3>Clock</h3></a>
						</div></div></div></div>
                                    
            <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles"style={{border:"none"}} >
						<div class="men-pro-item">
						<div class="men-thumb-item">
						<a href='/Work Station'><img src="../ass/images/wrt.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
            <h3>Work Station</h3></a>	
						</div></div></div></div>


          <div class="col-md-3 product-men women_two">
					<div class="product-googles-info1 googles"style={{border:"none"}} >
					<div class="men-pro-item">
					<div class="men-thumb-item">
					<a href='/Swing'>	<img src="../ass/images/swing.png" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
          <h3>Swings</h3></a>
					</div></div></div></div></div>
				
			   	</div>
			   	</div></div>





			<br></br><br></br><br></br>
			<div class="">
					<div class="  ">
						<div class="middle-text-info ">
							</div></div></div>
							<section class="w3l-text-6">
        <div class="text-6-mian bottom-space py-5">
          <div class="container">
            <div class="container py-lg-5 py-md-4 py-3">
                <div class="row top-cont-grid align-items-center">
                    <div class="col-lg-5 right-img sec-img-ab">
               
                       <div class="imghov" />
                    </div>
                    <div class="col-lg-1">

                    </div>
                    <div class="col-lg-6 left-cont mb-lg-0 mb-5">
                        <br></br>
                        <h5 class="a21" >Best Design and Decorations</h5><br></br>
                        <p style={{fontSize:"1.3rem"}}>Our furniture stands as a testament to the marriage of aesthetics and functionality. Each piece is designed not just to adorn your spaces but to elevate them. The perfect finish on every item exudes sophistication, making a statement that resonates with those who appreciate the finer things in life.</p>
                        <p style={{fontSize:"1.3rem"}}>Beyond beauty and quality, we take pride in our commitment to sustainability. Our selection of materials reflects our dedication to eco-friendly practices, ensuring that your furniture not only enhances your space but also contributes to a healthier planet.</p>
                      
                    </div>
                </div>
               
            </div>
        </div></div>
    </section>
	<br></br>

			<div class="">
					<div class="  ">
						<div class="middle-text-info1 ">
							</div></div></div>

							<section class="team py-4 py-5">
        <div class="container-fluid py-lg-5 py-md-4 py-3">
        <h5 class="a21" ><center>New Arrivals</center></h5><br></br><br></br>
            <div class="row">
             
            <TopProducts1 />
            </div>
        </div>
    </section>
   
	<br></br>

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../ass/images/bn4.png" class="d-block w-100" alt="..."/>
    </div>
   
   
  </div>
</div>

<div class="container">
				<section class="w3l-text-6 toping">
        <div class="text-6-mian bottom-space py-5">
            <div class="container py-lg-5 py-md-4 py-3">
								<div class="row top-cont-grid top-space align-items-center">
                <div class="col-lg-6 left-cont mb-lg-0 mb-5">
                    <h5 class="a21" ><center>Perfect Finish, Best
Materials</center></h5>
                        <p style={{fontSize:"1.3rem"}}>We believe that the foundation of extraordinary furniture lies in the materials used. That's why, at TRINITY Furnitures, we source only the best. Whether it's the richness of solid wood, the opulence of genuine leather, or the durability of premium metals, our commitment to quality materials ensures that your furniture not only looks exquisite but </p>
                        <p style={{fontSize:"1.3rem"}}>Quality is not just a promise; it's our commitment. Each piece undergoes rigorous quality checks to meet the highest industry standards. This ensures that when you choose TRINITY Furnitures, you're choosing furniture that not only meets but exceeds your expectations in terms of both design and durability.</p>
                        
                    </div>
                    <div class="col-lg-1">

                    </div>
                    <div class="col-lg-5 right-img">
                        <img src="../ass/images/a1.jpg" alt="" class="img-responsive img-fluid" />
                    </div>
                </div></div></div></section></div></section>

                <CookieConsent
                 location="bottom"
               
                 buttonText="I Accept"
                 cookieName="myAwesomeCookieName2"
                 style={{ background: "#0a571e" }}
                 buttonStyle={{ background: "#ffff", fontSize: "24px" }}
                 expires={155}
               ><br></br>
               We use cookies to improve your journey and to personalize your web experience. {" "}
                  By continuing to use this site, you are accepting the Trinity cookie policy.
               </CookieConsent>
             

                {/* <section id="products" className="card">
                <div className="container">
                  
                
                    <Pdoor/>
                    </div>
            </section> */}

            {/* <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                   
                    <TopProducts /> 
                   
                </div>
            </section> */}




       








        </main>
        
    );
};

export default Home;;