import React, { useContext, useEffect, useState } from 'react';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import Header from '../components/common/Header';
import Modal from 'react-bootstrap/Modal';
import ConfettiCannon from './ConfettiCannon';
import axios from 'axios';
import { TbTrash } from 'react-icons/tb';
import QuantityBox from '../components/common/QuantityBox';
import { Link, useParams } from 'react-router-dom';
import { useCartCount } from '../contexts/cart/CartCountContext';
import Cookies from 'js-cookie';

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useDocTitle('Cart');
     
  const { cartItemCount , setCartItemCount } = useCartCount();
  const [cartTotal, setCartTotal] = useState(0);
  const { incrementItem, decrementItem } = useContext(cartContext);
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [userData, setUserData] = useState({});
 
   
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const UId = Cookies.get('useid');
  


  useEffect(() => {
    // Get the user ID from session storage
  const UId = Cookies.get('useid');
  
    // Fetch cart items for the logged-in user
  axios
  .get(`http://65.1.134.51:3001/cart/items?UId=${UId}`)
  .then((response) => {
  const cartItems = response.data.cartItems;
  setCartItemCount(cartItems.length);
  
        // Move the calculateCartTotal function here
     
  })
        .catch((error) => {
        console.error('Error fetching cart items:', error);
        });
        }, [[setCartItemCount]]);
  
 
  const handleBuyNow = () => {
    // Get the user ID from session storage
    const Uid = Cookies.get('useid');
  
    // Check if the address column is empty
    if (!userData.address) {
      setShowEmptyModal(true);
      return;
    }
  
    // Make a POST request for each product in the cart to save the order details
    cartItems.forEach((item) => {
      axios
      .post('http://65.1.134.51:3001/order', {
      Uid: Uid,
      fname: userData.name,
      phonenumber: userData.phone_number,
      address: userData.address,
      productname: item.name,
      quantity: item.quantity,
      price: item.price,
      description: item.description,
      model_no: item.model_no,
      image: item.image,
      Request: 'Order Placed',
      })
      .then((response) => {
      console.log('Order details saved successfully:', response.data);
          // Perform any additional actions if needed
  
          // After the order is successfully saved, delete each item in the cart after 10 seconds  
      setTimeout(() => {
      axios
      .delete(`http://65.1.134.51:3001/cart/items/${item.cartid}`)
      .then((response) => {
      console.log('Cart item deleted successfully:', response.data);
      // Update the cart items in the frontend after successful deletion
      setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.cartid !== item.cartid)
      );
      })
      .catch((error) => {
      console.error('Error deleting cart item:', error);
      });
      }, 1000); // Delay of 10 seconds
  
      setShowSuccessModal(true);
      })
      .catch((error) => {
      console.error('Error saving order details:', error);
          // Handle the error if needed
      });
      });
      };

  
  
      useEffect(() => {
    // Get the user ID from session storage
      const UId = Cookies.get('useid');

    // Fetch cart items for the logged-in user
     axios
     .get(`http://65.1.134.51:3001/cart/items?UId=${UId}`)
     .then((response) => {
     const cartItems = response.data.cartItems.map((item) => ({
      ...item,
      originalPrice: item.price,
      price: item.price * item.quantity, // Calculate the updated price based on originalPrice and quantity
      }));
      setCartItems(cartItems); // Update the state with cart items
      setIsLoading(false); // Data fetching is complete
      })
      .catch((error) => {
      console.error('Error fetching cart items:', error);
      setIsLoading(false); // Data fetching is complete even in case of error
      });
      }, []);
      const removeItem = (cartid) => {
      // Replace 'your_backend_api_base_url' with the actual base URL of your backend API
      axios
      .delete(`http://65.1.134.51:3001/cart/items/${cartid}`)
      .then((response) => {
      console.log(response.data); // Log the response from the backend
      // Update the cart items in the frontend after successful deletion
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.cartid !== cartid));
      })
      .catch((error) => {
      console.error('Error deleting cart item:', error);
      });
      };

      const handleQuantityChange = (itemId, newQuantity) => {
      const updatedCartItems = cartItems.map((item) => {
      if (item.cartid === itemId) {
      return {
      ...item,
      quantity: newQuantity,
      price: item.originalPrice * newQuantity, // Update the price based on the original price and new quantity
      };
      }
      return item;
      });
  
    // Use a callback function to ensure the updated cart items are used in the calculations
      setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.map((item) => {
      const updatedItem = updatedCartItems.find((updatedItem) => updatedItem.cartid === item.cartid);
      return updatedItem ? updatedItem : item;
      });
      calculateCartTotal(updatedItems);
      return updatedItems;
      });
  
          // Find the item with the specified itemId
       const itemToUpdate = cartItems.find((item) => item.cartid === itemId);
       if (itemToUpdate) {
          // Update the quantity and price in the database
       updateQuantityAndPriceInDatabase(itemId, newQuantity);
      }
  };
  
  const updateQuantityAndPriceInDatabase = (itemId, newQuantity) => {
    // Make an API call to update the quantity and price in the database
    axios
      .put('http://65.1.134.51:3001/cart/update', { cartid: itemId, quantity: newQuantity })
      .then((response) => {
        console.log(response.data.message); // Log the success message
      })
      .catch((error) => {
        console.error('Error updating quantity and price in the database:', error);
      });
  };

  const calculateCartTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
    setCartTotal(total);
   
    // Save the cart total to session storage
    sessionStorage.setItem('cartTotal', total.toString());
  };
  
  useEffect(() => {
    // Calculate and set the cart total whenever cartItems changes
    calculateCartTotal();
  }, [cartItems]);
 
 
  const fetchUserData = (Uid) => {
    axios.get(`http://65.1.134.51:3001/usersorder/${Uid}`)
      .then(response => {
        const userDataResponse = response.data;
        setUserData(userDataResponse);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    const Uid = sessionStorage.getItem("useid"); // Get the Uid from the session storage
    if (Uid) {
      fetchUserData(Uid); 
    }
  }, []);
  
 
    return (
        <>
            <Header /><br/><br/><br/><br/><br/>

            
            <section id="cart" className="section">
                <div className="container">
                    {  cartItemCount === 0 ? (

                        <EmptyView
                            icon={<img src="../ass/images/the.gif" alt="" class="img-responsive img-fluid mjy" />}
                            msg="Your Cart is Empty"
                            link="/all-products"
                            btnText="Start Shopping"
                        />
                    ) : (
                        <div className="wrapper cart_wrapper">
                            <div className="cart_left_col">
                            {cartItems.map((item) => (
        <div key={item.cartid} className="cart_item">
          <figure className="cart_item_img">
            <Link to={`http://65.1.134.51:3001/product-details/${item.id}`}>
              <img src={`http://65.1.134.51:3001/uploads/${item.image}`} alt="product-img" />
            </Link>
          </figure>
          <div className="cart_item_info">
            <div className="cart_item_head">
              <h4 className="cart_item_title">
                <Link to={`http://65.1.134.51:3001/product-details/${item.id}`}>
                  {item.name} {item.description}
                </Link>
              </h4>
              <div className="cart_item_del">
                <span onClick={() => removeItem(item.cartid)}>
                  <TbTrash />
                </span>
                <div className="tooltip">Remove Item</div>
              </div>
            </div>

            <h2 className="cart_item_price">{displayMoney(item.price)} &nbsp;</h2>

            <QuantityBox
            itemId={item.cartid} // Pass the cartid as itemId
            itemQuantity={item.quantity} // Pass the quantity as itemQuantity
            incrementItem={incrementItem} // Pass the increment function from cartContext
            decrementItem={decrementItem} // Pass the decrement function from cartContext
            onQuantityChange={handleQuantityChange}
            // Pass the handleQuantityChange function
            />   
            </div>
            </div>
            ))} 
                              
          </div>
          <div className="cart_right_col">
          <div className="order_summary">
          <h3>
          Order Summary &nbsp;
          ( {cartItemCount} {cartItemCount > 1 ? 'items' : 'item'} )
          </h3>
          <div className="order_summary_details">
          <div className="price">
          <span>Original Price</span>
          <b>{cartTotal}</b>
          </div>
                                      
          <div className="delivery">
          <span>Delivery</span>
          <b>Free</b>
          </div>


        <div className="separator"></div>
        <div className="total_price">
        <b><small>Total Price</small></b>
        <b>{cartTotal}</b>
        </div>  
        </div>

        <ConfettiCannon />



        <div class="last">
        <center> <button class="btn1 js-confetti btn-ammu" data-toggle="modal" data-target="#exampleModal"  onClick={handleBuyNow} >Buy Now</button>
        </center>                              
        <br/><br/>
        <div class="last">
                                            
        </div>                                       
        {showSuccessModal && (

        <div class="modal fade  show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">HOOOOrrraaaayyy</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div> 

          <div class="modal-body">
          your order have been placed , Please check the below link for more details
           </div>
           <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           <button type="button" class="btn btn-primary"><a href='/order'>Order details</a></button>
            </div>
            </div>
            </div>
            </div>
             )}

          {showEmptyModal && (
          <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">OOPS</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          your order is not placed. Please add your address in the profile page. The link to the profile page is below.
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary"><a href={`/profile/${UId}`}>Profile</a></button>
          </div>
          </div>
          </div>
          </div>
          )}
          </div>
          </div>
          </div>
          </div>
          )}

            </div>
              
  



            </section>
            
        </>
    );
};

export default Cart;