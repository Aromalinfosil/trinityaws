import React, { useContext, useEffect, useState,useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { dropdownMenu } from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import {GiHamburgerMenu} from 'react-icons/gi';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { useCartCount } from '../../contexts/cart/CartCountContext';
import Cookies from 'js-cookie';

import $ from 'jquery';

   


const Header = () => {
	const UId = Cookies.get('useid');
    const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { cartItems } = useContext(cartContext);
	const [isNavCentered, setIsNavCentered] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginStatus, setLoginStatus] = useState('');
	const { cartItemCount ,setCartItemCount} = useCartCount();
	

 
  const [showDropdown, setShowDropdown] = useState(false);
  
  


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  
  const handleLoginClick = (e) => {
	e.preventDefault();
	toggleForm(true);
	
  };
  
  const handleLogout = () => {
	setIsLoggedIn(false); // Update the isLoggedIn state to false upon logout
	localStorage.setItem('isLoggedIn', false); // Update the logged-in state in localStorage
	window.location.href = "/";
	Cookies.remove('userFirstName');
	Cookies.remove('useid');
	Cookies.set('isLoggedIn', 'false');
  };
  
  // When the component mounts, check if the user was previously logged in


  useEffect(() => {
	const storedLoggedInState = localStorage.getItem('isLoggedIn');
	if (storedLoggedInState === 'true') {
	  setIsLoggedIn(true);
	}
  }, []);




	useEffect(() => {
		$(document).ready(function() {
		  $(".dropdown").hover(
			function() {
			  $('.dropdown-menu', this).stop(true, true).slideDown("fast");
			  $(this).toggleClass('open');
			},
			function() {
			  $('.dropdown-menu', this).stop(true, true).slideUp("fast");
			  $(this).toggleClass('open');
			}
		  );
		});
	  }, []);








	
	  useEffect(() => {
		
		const UId = Cookies.get('useid');
	  
	
		axios
		  .get(`/cart/items?UId=${UId}`)
		  .then((response) => {
			const cartItems = response.data.cartItems;
			setCartItemCount(cartItems.length);
		 
		  })
		  .catch((error) => {
			console.error('Error fetching cart items:', error);
		  });
	  }, [[setCartItemCount]]);


    return (
        <>
		<div id="allnav">
        <header id="header"  >
		<div className="container">
        <div className="navbar">
					
					
		<div className="ffg logos logo3">
        <div className="logre">
        <a href="/">
        <img src="../ass/images/logo12.png" className="logo " alt="" />
        </a>
       </div>

        <div className="loging">
        <a href="/">
       <img src="../ass/images/logotit.png" class="logoh1" alt="" />
       </a>
      </div>
      </div>
		

                        <nav className="nav_actions d-flex justify-content-end d-flex align-items-start nav-sea nav-sea1 nav-sea2  ">
			
						    <div className="search_action">
                            <span onClick={() => toggleSearch(true)}>
                                    <AiOutlineSearch />
                                </span>
                                <div className="tooltip">Search</div>
                            </div>

                            <div className="cart_action">
                                <Link to="/cart">
                                  
								<AiOutlineShoppingCart />
                                    {
                                        cartItemCount > 0 && (
                                            <span className="badge">{cartItemCount}</span>
                                        )
                                    }
                                </Link>
                                <div className="tooltip">Cart</div>
                            </div>



							<div className="user_action">
  <div className="tooltip">Profile</div>
    <div id="google_translate_element"></div>
  <Link to={isLoggedIn ? `/profile/${UId}` : "#formUserInfo"} onClick={() => toggleForm(!isLoggedIn)}>
    <span>
      <AiOutlineUser />
    </span>
  </Link>
</div>


							
                     
			
	 {!isLoggedIn ? (
     <button type="button" onClick={handleLoginClick} className="small-btn" >
     <div class="btnfont"> Login</div>
     </button>
    ) : (
  <button type="button" onClick={handleLogout} className="small-btn pop">
   <div class="btnfont"> Logout</div>
  </button>
)} 		  </nav>


                    </div>
				
					<div class="nana">
			<nav class="navbar navbar-expand-lg navbar-light  top-header mt-2 d-flex align-items-end ">
			
			<div class="togil">
		     <ul class="navbar-toggler " data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				    aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						
					</span>
				</ul>  </div>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
			
					<ul class="navbar-nav nav-mega ml-auto " >
          

             

	{/* <li class="nav-item dropdown">
							
	<a class="nav-link dropdown-toggle" href="/Service" id="navbarDropdown1"  data-toggle="dropdown" aria-haspopup="true"
	aria-expanded="false" >
						
	<font color="#000"> Doors</font>	
	</a>
	<ul class="dropdown-menu mega-menu ">

						<li>
						<div class="row">
						<div class="col-md-4 media-list span4 ">
																				
						<ul>

						<li class="media-mini mt-3">
						<h5 class="tittle-w3layouts-sub"><u>Doors</u> </h5>
								
						<a href="/Cdoors"><font color="black">Classic Doors</font></a>
						</li>


						
												
						<li>
						<a href="/Edoor"><font color="black">Entrance Doors</font></a>
						</li>

						<li>
						<a href=""><font color="black">Cravings Doors</font>	</a>
						</li>
												
						</ul>
						</div>
									
										
						</div>
								
						</li>
					    </ul>
						</li>
						 */}
						<li class="nav-item dropdown">
							
							<a class="nav-link dropdown-toggle" href="/Service" id="navbarDropdown1"  data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false" >
						
						<font color="#000"> Swing</font>	
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 ">
										
											
											<ul>
									
								<li class="media-mini mt-3">
							<h5 class="tittle-w3layouts-sub"><u>Swing</u> </h5>
								
								<a href="/Swing"><font color="black">Swing</font></a>
								</li>
												
								{/* <li>
								<a href=""><font color="black">Entrance Doors</font></a>
								</li>
								<li>
								<a href=""><font color="black">Cravings Doors</font>	</a>
								</li> */}
												
								</ul>
								</div>

								<div class="col-md-4 media-list span4 ">
								<img src="../ass/images/swing6.png" class="" alt="" />
								</div>
								<div class="col-md-4 media-list span4 ">
								<img src="../ass/images/swing4.png" class="" alt="" />
								</div>
								</div>
								
								</li>
							</ul>
						</li>
						
						<li class="nav-item dropdown">
							
							<a class="nav-link dropdown-toggle" href="/Service" id="navbarDropdown1"  data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false" >
						
						<font color="#000"> Doors</font>	
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 ">
										
											
											<ul>
									
								<li class="media-mini mt-3">
							<h5 class="tittle-w3layouts-sub"><u>Doors</u> </h5>
								
													<a href="/Door"><font color="black">Doors</font></a>
												</li>
												

												
											</ul>
										</div>
									
										
									</div>
								
								</li>
							</ul>
						</li>
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
					<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
					aria-expanded="false">
					<font color="#000">Bedrooms</font>	
					</a>

					<ul class="dropdown-menu mega-menu ">
					<li>
					<div class="row">
					<div class="col-md-4 media-list span4 text-left">							
					<ul>
										
					<li class="media-mini mt-3">
					<h5 class="tittle-w3layouts-sub"><u>Bed </u></h5>
					<a href="/Bed"><font color="black">Bed</font>

                    </a>
					</li>

		
					</ul>
					</div>
									
					<div class="col-md-4 media-list span4 text-left">					
					</div>				
					</div>
								
					</li>
					</ul>
					</li>
					<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
					aria-expanded="false">
					<font color="#000">Living</font>	
					</a>
					<ul class="dropdown-menu mega-menu ">
					<li>
					<div class="row">
					<div class="col-md-3 media-list span4 text-left">	
					<ul>
											
					<li class="media-mini mt-3">
					<h5 class="tittle-w3layouts-sub"><u>Sofa </u> </h5>
					<a href="/Sofa">	<font color="black"> Sofa</font></a>
					</li>

					{/* <li>
					<a href="/TelephoneSofa">	<font color="black">TelephoneSofa</font></a>
					</li>																						 */}
					</ul>

					</div>
					<div class="col-md-4 media-list span4 text-left">
										
					<ul>
					<li class="media-mini mt-3">
					<h5 class="tittle-w3layouts-sub"><u>Cabinet</u> </h5>
					<a href="/Show cabinet">	<font color="black">Show Cabinet</font></a>
					</li>

					<li>
					<a href="/Wardrobe">	<font color="black">Wardrobe </font></a>
					</li>						
											
					{/* <li>
					<a href="/Bar Cabinet">	<font color="black">Bar Cabin</font></a>
					</li> */}

					<li>
					<a href="/Shoe Rack">	<font color="black">Shoe Rack</font></a>					
				    </li>
												
					<li>
					<a href="/Corner Rack">	<font color="black">Corner Rack</font></a>
						</li>
											
						</ul>

					</div>
					<div class="col-md-2 media-list span4 text-left">											
					<div class="media-mini mt-3">
					<ul>
										
					<li class="media-mini mt-3">
					<h5 class="tittle-w3layouts-sub-nav"><u>Chair</u> 
					</h5>

					<a href="/Chairs">	<font color="black">Chair</font></a>
					</li>

					<li>
					<a href="/Rocking Chair">	<font color="black">Rocking Chair</font></a>
					</li>


					<li>
					<a href="/Stool">	<font color="black"> Stool</font></a>
					</li>						
					</ul>		
					</div></div>
					<div class="col-md-3 media-list span text-left">										
					<ul>
					<li class="media-mini mt-3">
					< a href='Dining'><h5 class="tittle-w3layouts-sub"> <u>Dining</u> </h5></a>	
					<a href="/Dining Set"><font color="black">Dining Set</font></a>
					</li>
					<li class="">
					<a href="/Kitchen Cabinet"><font color="black">Kitchen Cabinet</font></a>
					</li>
												
												
				</ul>
				</div>
				</div>
									
								
				</li>
				</ul>
				</li><li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="/Religious" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false">
				<font color="#000">Religious</font>
				</a>

				<ul class="dropdown-menu mega-menu ">
				<li>
				<div class="row">
				<div class="col-md-4 media-list span4 text-left">									
				<ul>

				<li class="media-mini mt-3">
				< a href='/Religious'><h5 class="tittle-w3layouts-sub"> <u>Religious</u> </h5></a>	
				<a href="/"><font color="black">.....</font></a>
				</li>

				<li class="">
				<a href="/Kitchencabinet"><font color="black">.....</font></a>
				</li>							
												
				</ul>
				</div>
				</div></li></ul>
				</li>	<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false">
				<font color="#000">Office</font>
				</a>

				<ul class="dropdown-menu mega-menu ">
				<li>
				<div class="row">																	
				<div class="col-md-6 media-list span4 text-left">										
				<ul>

		     	<li class="media-mini mt-3">
			    <h5 class="tittle-w3layouts-sub-nav"><u>Book Shelves</u> 
			    </h5>
			    <a href="/Bookshelf"><font color="black">Book Shelves</font></a>
			    </li>

			    <li>
			    <a href="/Magazine Holder"><font color="black">Magazine Holder</font></a>
			    </li>
												
												
			    </ul>
			    </div>
			    </div>							
			    </li>
		     	</ul>
			    </li>

			<li class="nav-item dropdown">
		    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
			aria-expanded="false">
			<font color="#000">Tables</font>
			</a>

			<ul class="dropdown-menu mega-menu ">
			<li>
			<div class="row">
			<div class="col-md-4 media-list span4 text-left">								
			<ul>
			<li class="media-mini mt-3">
			<h5 class="tittle-w3layouts-sub"> <u>Tables</u>  </h5>									
			</li>
			<li class="">
			<a href="/Work Station"><font color="black">Work Station</font></a></li>
			{/* <li class=""><a href="#"><font color="black">Laptop Stand</font></a></li> */}
			<li class=""><a href="/Coffee Table"><font color="black">Coffee Table </font></a></li>
			<li class=""><a href="/Dressing Table"><font color="black">Dressing Tables</font></a></li>
			<li class=""><a href="/Bedside"><font color="black">Bed Side</font></a></li>						
			</ul>
			</div>


			<div class="col-md-4 media-list span4 text-left">
			<ul>
			<li class="media-mini mt-3">
			<h5 class="tittle-w3layouts-sub">  </h5>										
			</li>
																			
			</ul>
			</div>
								
			</div>											
			</li>
			</ul>
			</li>
		
			<Dropdown>
			<Dropdown.Toggle variant="light" className='nkl no-icon-arrow' id="dropdown-basic">
	        <i class="fa-solid fa-bars"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
		    <div class="container">
            <div className=" drp">
		    <a href='/Otherp' role="button"  className='sfnt' aria-haspopup="true">
            OtherProduct</a><br></br>
		    <a href='/all-products' role="button" className='sfnt'  aria-haspopup="true">
            Allproducts</a><br></br>
			<a href='/About' role="button" className='sfnt'  aria-haspopup="true">
            About</a><br></br>
			<a href='/Service' role="button" className='sfnt'  aria-haspopup="true">
            Service</a><br></br>
			<a href='/Contact' role="button" className='sfnt'  aria-haspopup="true">
            Contact</a><br></br>                       
			<a href="../ass/images/trinitybrochure.pdf" class="sfnt" target="_blank">ProductBrochure</a><br></br>	
			<a href='/Order' role="button" className='sfnt' aria-haspopup="true">Order</a>							
			</div >
			</div>
            </Dropdown.Menu>
            </Dropdown>


			</ul>
			</div>
			</nav></div>
			</div>
			</header>

            <SearchBar />
            <AccountForm /><br></br></div>
            </>
            );
            };

export default Header;
