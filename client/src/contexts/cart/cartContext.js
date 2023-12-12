import React, { createContext, useReducer } from 'react';
import cartReducer from './cartReducer';

// Cart-Context
const cartContext = createContext();

// Initial State
const initialState = {
    cartItems: [],
    cartTotal: 0,
    cartItemCount: 0, // Add cartTotal field to the initial state
};
// Cart-Provider Component
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Dispatched Actions
    const addItem = (item) => {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: { item }
        });
    };

    const removeItem = (itemId) => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { itemId }
        });
    };

    const incrementItem = (itemId) => {
        return dispatch({
            type: 'INCREMENT_ITEM',
            payload: { itemId }
        });
    };

    const decrementItem = (itemId) => {
        return dispatch({
            type: 'DECREMENT_ITEM',
            payload: { itemId }
        });
    };
    const updateCartTotal = () => {
        // Calculate the total based on the current cartItems
        const total = state.cartItems.reduce((accumulator, item) => {
            return accumulator + item.price * item.quantity;
        }, 0);
    
        // Update cartTotal in the state
        dispatch({
            type: 'UPDATE_CART_TOTAL',
            payload: { total },
        });
    };
    const updateCartItemCount = (count) => {
        dispatch({
            type: 'UPDATE_CART_ITEM_COUNT',
            payload: count,
        });
    };
    // Context values
    const values = {
        ...state,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        updateCartTotal,
        updateCartItemCount, 
    };

    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    );
};


export default cartContext;
export { CartProvider };