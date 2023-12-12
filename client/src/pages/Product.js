import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import axios from "axios";
import { Link ,navigate } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [name, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description,setDescription]=useState('');
  const [model_no,setModel_no]=useState('')
  const [image, setImage] = useState(null);
  const [productStatus, setProductStatus] = useState('');
  

 
// 
const handleProductSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('model_no',model_no);

    await axios.post('/product', formData);

    setProductStatus('Product added successfully');
    window.location.href = "/product";
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      setProductStatus(error.response.data.error);
    } else {
      console.error(error);
      setProductStatus('Failed to add product');
    }
  }
};

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (

    <> <section className="">
      <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
      <div className="card text-black">
      <div className="card-body p-md-5">
      <div className="row justify-content-center">
      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add New Product</p>
      <form className="mx-1 mx-md-4" encType="multipart/form-data">
      <div className="d-flex flex-row align-items-center mb-4">
      <div className="form-control gp flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example1c">Product Name  :</label>
      <input className="textInput" type="text" name="name" onChange={(e) => setProductName(e.target.value)} placeholder="" required />
      </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
      <div className="form-control gp flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example3c">Category  :</label>
      <input className="textInput" type="text" name="brand" onChange={(e) => setCategory(e.target.value)} placeholder="" required />
      </div>
      </div>


      <div className="d-flex flex-row align-items-center mb-4">
      <div className="form-control gp flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example4c">Price  :</label>
      <input className="textInput" type="number" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="" required />
      </div>

      </div>
      <div className="d-flex flex-row align-items-center mb-4">
      <div className="form-control gp flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example4c">Dimention  :</label>
      <input className="textInput" type="text" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="" required />
      </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
      <div className="form-control gp flex-fill mb-0">
      <label className="form-label" htmlFor="form3Example4c">model number :</label>
      <input className="textInput" type="text"  onChange={(e) => setModel_no(e.target.value)} placeholder="" required />
      </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
      <div className="form-control gp flex-fill mb-0" >
      <input type="file" name="image" onChange={handleImageUpload} style={{height:"50px"}} />
      <div className="d-flex justify-content-end">
           
      {image && (
      <img src={URL.createObjectURL(image)}  alt="Selected Image" style={{ marginLeft: '10px', height: '50px' }} />
      )}
                    
      </div>
      </div>
      </div>
      <br/><br/><br/>

       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
      <input className="btn btn-success" type="submit" onClick={handleProductSubmit} value="Add a new Product" />
      <h1 style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{productStatus}</h1>
      </div>
      <center> <Link to={`/products`} className="btn btn-success" style={{ marginRight: '10px' }}>Show Products</Link></center>
       </form>


          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>

    </section><br></br><br></br><br></br><br></br><br></br></>





  )
 
            }

export default Product