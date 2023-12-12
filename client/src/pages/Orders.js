import React,{useEffect,useState} from 'react'
import { Link, resolvePath } from 'react-router-dom';
import Axios from "axios";

function Orders() {


  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
  getOrderList();
  }, []);

  function getOrderList() {
  Axios.get("http://65.1.134.51:3001/orders").then(function(response) {
  setOrderList(response.data);
  });
  }

    const deleteOrder = (Oid) => {
    Axios.delete(`http://65.1.134.51:3001/orders/${Oid}`).then((response) => {
    if (response.data.message) {
    console.log(response.data.message);
    } else {
    console.log("Product deleted");
    setOrderList(orderList.filter((del) => del.Oid !== Oid));
    }
    }).catch((error) => {
    console.error('Error deleting order:', error);
    });
    };
  
  
       return (
        <div>
        <h1>Order Summary Details</h1>
        <table className="table table-bordered table-striped">
        <thead>
        <tr>
        <th>Serial No:</th>
        <th>Name</th>
        <th>Phone number</th>
        <th>Address</th>
        <th>Product Name</th>   
        <th>quantity</th> 
        <th>Price</th>
        <th>Description</th>
        <th>Model no</th>
        <th>Image</th>
        <th>Request</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {orderList.map((order, index) => (
        <tr key={order.id}>
        <td>{index + 1}</td> {/* Serial number */}
        <td>{order.fname}</td>
        <td>{order.phonenumber}</td>
        <td>{order.address}</td>
        <td>{order.productname}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>{order.description}</td>
        <td>{order.model_no}</td>
        <td>

        <img
          src={`http://65.1.134.51:3001/uploads/${order.image}`}
          style={{ width: '100px', height: '100px' }}
          alt="Orders"
        />
           </td>
          <td>{order.Request}</td>
          <td>
          <button onClick={() => deleteOrder(order.Oid)} className="btn btn-danger">
           Delete
         </button>
          </td>
          </tr>
       ))}
       </tbody>
       </table>
       </div>
       );
       }


export default Orders