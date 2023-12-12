// CartItem.js

import React, { useContext, useState, useEffect } from 'react';
import { TbTrash } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import QuantityBox from '../common/QuantityBox';
import axios from 'axios';
import Cookies from 'js-cookie';

const CartItem = () => {
  const { incrementItem, decrementItem } = useContext(cartContext);
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [cartTotal, setCartTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  
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
  




const updateQuantityAndPriceInDatabase=( itemId, newQuantity) => {
  axios 
  .put('http://65.1.134.51:3001/cart/update' , {cartid: itemId, quantity: newQuantity})
  .then((response) => {
    console.log(response.data.message);
  })
  .catch((error) =>{
    console.error('Error updating quantity and price in the database:' , error);
  })
}


const calculateCartTotal = (items) => {
  const total = items.reduce((sum, item) => sum + item.price,0);
  setCartTotal(total);
}




  return (
    <>
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
              onQuantityChange={handleQuantityChange} // Pass the handleQuantityChange function
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
