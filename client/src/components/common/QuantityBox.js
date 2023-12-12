import React, { useContext } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import cartContext from '../../contexts/cart/cartContext';

    const QuantityBox = (props) => {
    const { itemId, itemQuantity, incrementItem, decrementItem, onQuantityChange } = props;
    const { updateCartItem } = useContext(cartContext);

     const handleIncrement = () => {
     incrementItem(itemId);
     onQuantityChange(itemId, itemQuantity + 1); // Update the quantity and price
     };


      const handleDecrement = () => {
     decrementItem(itemId);
     onQuantityChange(itemId, itemQuantity - 1); // Update the quantity and price
    };


  return (
    <>
        {/* <div className="quantity_box">
        <button type="button" onClick={handleDecrement}disabled={itemQuantity == 1}>
        <FaMinus />
        </button>
        <span className="quantity_count">{itemQuantity}</span>
        <button type="button" onClick={handleIncrement} disabled={itemQuantity >= 5}>
        <FaPlus />
        </button>
        </div> */}

          <div className="quantity_box">
          <button type = "button" onClick={handleDecrement} disabled={itemQuantity ==1}>
          <FaMinus />
          </button>

    

      <span className='quantity_count'>{itemQuantity}</span>
      <button type="button" onClick={handleIncrement} disabled={itemQuantity >= 5}>
      <FaPlus />
      </button>
      </div>

    </>
  );
};

export default QuantityBox;
