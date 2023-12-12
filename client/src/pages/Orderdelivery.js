import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orderdelivery() {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    axios
    .get('http://65.1.134.51:3001/orders')
    .then((response) => {
    const sortedOrders = response.data.sort((a, b) => {
    if (a.Request === 'Cancellation Request' && b.Request !== 'Cancellation Request') {
    return -1;
    }
    if (a.Request !== 'Cancellation Request' && b.Request === 'Cancellation Request') {
    return 1;
    }
    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
    });
    setOrderDetails(sortedOrders);
    })
    .catch((error) => {
    console.error('Error fetching order details:', error);
    });
  }, []);

  return (
    <div>
      <center>
        <h1>Ordered products</h1>
      </center>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Model No</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Image</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
        {orderDetails.map((order, index) => (
        <tr key={index}>
        <td>{order.fname}</td>
        <td>{order.phonenumber}</td>
        <td>{order.address}</td>
        <td>{order.productname}</td>
        <td>{order.description}</td>
        <td>{order.model_no}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>
        <img src={`http://65.1.134.51:3001/uploads/${order.image}`} alt="product-img" style={{ width: '100px' }} />

       
        </td>
        <td>{order.Request}</td>
        </tr>
        ))}
        </tbody>
        </table>
        </div>
  );
}

export default Orderdelivery;