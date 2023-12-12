import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Products() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30); // Set the number of products per page

  useEffect(() => {
    getProductList();
  }, []);

  function getProductList() {
    Axios.get('http://65.1.134.51:3001/product').then(function (response) {
      setProductList(response.data);
    });
  }

  const deleteProduct = (id) => {
    Axios.delete(`http://65.1.134.51:3001/del/${id}`).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
      } else {
        console.log('Product deleted');
        setProductList(productList.filter((pro) => pro.id !== id));
      }
    });
  };

  // Calculate indexes for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>List products</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Code</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.model_no}</td>
              <td>{product.price}</td>
              <td>
                <img
                  src={`http://65.1.134.51:3001/uploads/${product.image}`}
                  style={{ width: '100px', height: '100px' }}
                  alt="Product"
                />
              </td>
              <td>
                <Link to={`http://65.1.134.51:3001/prodisplay/${product.id}`} className="btn btn-success" style={{ marginRight: '10px' }}>
                  Edit
                </Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

           {/* Pagination */}
           <ul className="pagination">
           {Array.from({ length: Math.ceil(productList.length / productsPerPage) }).map((_, index) => (
           <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
           <button onClick={() => paginate(index + 1)} className="page-link">
           {index + 1}
            </button>
            </li>
             ))}
      </ul>
    </div>
  );
}

export default Products;