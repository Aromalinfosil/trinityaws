import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from '../components/common/Header';
import Cookies from 'js-cookie';

function Orderdetails() {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const Uid = Cookies.get('useid');
    Axios.get(`http://65.1.134.51:3001/order-details?Uid=${Uid}`)
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching order details:', error);
      });
  }, []);

  const handleCancelRequest = (orderId) => {
    console.log('Cancel request initiated for orderId:', orderId); // Log the orderId to the console
    const requestType = orderDetails.find((order) => order.Oid === orderId)?.Request;

    let newRequest = '';
    if (requestType === 'Order Placed') {
      newRequest = 'Cancellation Request'; // Set the request type to 'Cancellation Request' if the current request type is 'Order Placed'
    } else {
      newRequest = 'Order Placed'; // Set the request type to 'Order Placed' for any other case
    }

    Axios.put(`http://65.1.134.51:3001/order/${orderId}`, { Request: newRequest })
      .then((response) => {
        // Check if the response contains the updated order details
        if (response.data.message === 'Order details updated successfully') {
          console.log('Order details updated successfully for orderId:', orderId); // Log success message with orderId
          // Update the order details after cancellation request
          const updatedOrderDetails = orderDetails.map((order) =>
            order.Oid === orderId ? { ...order, Request: newRequest } : order
          );
          setOrderDetails(updatedOrderDetails);
        }
      })
      .catch((error) => {
        console.error('Error updating cancel request:', error);
      });
  };

  return (
    <>
    <div>
      <Header/><br/><br/><br/>
      <center>
        <h1>Ordered products</h1>
      </center>
      {orderDetails.length === 0 ? (
        <p style={{ textAlign: 'center' }}>There are no orders yet.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Address</th>
              <th>productname</th>
              <th>Description</th>
              <th>Model No</th>
              <th>quantity</th>
              <th>Price</th>
              <th>Image</th>
              <th>Order Cancellation</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order) => (
              <tr key={order.Oid}>
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
                <td>
                  {order.Request !== 'Cancellation Request' ? (
                    <button className="btn btn-danger" onClick={() => handleCancelRequest(order.Oid)}>
                      Cancel Order
                    </button>
                  ) : (
                    <button className="btn btn-secondary" onClick={() => handleCancelRequest(order.Oid)}>
                      Cancel Request
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
}

export default Orderdetails;