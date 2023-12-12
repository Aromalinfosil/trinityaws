import React,{useEffect,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from "axios";


function Prodisplay() {

    const [updateStatus, setUpdateStatus] = useState("");
    const {id} = useParams();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const  navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [model_no ,setModel_no] = useState("");


   
    useEffect(() => {
      fetchUser();
    }, []); 

 

       function fetchUser() {
        Axios.get(`http://65.1.134.51:3001/product/${id}`)

        .then((response) => {
        const pro = response.data;
        setName(pro.name);
        setCategory(pro.category);
        setPrice(pro.price);         
        setDescription(pro.description);
        setImage (pro.image);
        setModel_no(pro.model_no);
        })
        .catch((error) => {
        console.error(error);
        });
        }

  
        
        const handleSubmit = (e) => {
          e.preventDefault();
        
          const formData = new FormData();
          formData.append('name', name);
          formData.append('category', category);
          formData.append('price', price);
          formData.append('description', description);
          formData.append('model_no', model_no);
        
          if (selectedImage) {
            formData.append('image', selectedImage);
          } else {
            // Append the existing image if no new image is selected
            formData.append('currentImage', image);
          }
        
          Axios.put(`/product/${id}`, formData)
            .then((response) => {
              console.log('Product updated successfully');
              // Perform any additional actions or UI updates upon successful update
              navigate("/products");
            })
            .catch((error) => {
              console.error('Error updating product:', error);
              // Handle the error and display an appropriate message to the user
            });
          console.log('Sending the following data:', formData);
        };
  const handleImageChange = (e) => {
    setImage(null); // Reset the fetched image when a new image is selected
    setSelectedImage(e.target.files[0]);
  };
 

        

        
  return (

    
    
<>


<div className="container">
<form onSubmit={handleSubmit} enctype="multipart/form-data">
<div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h2 className="text-center m-4">Edit User </h2>


<div className="mb-3">
<label htmlFor="Name" className="form-label">
Product Name
</label>
<input
type={"text"}
className="form-control"
placeholder="Enter your name"
name="name"
 value={name} onChange={(e) => {setName(e.target.value)}}
 />            
</div>




<div className="mb-3">
<label htmlFor="Username" className="form-label">
Category
</label>
                                                  
<input                                          
type={"text"}                                 
className="form-control"                       
placeholder="Enter your Category"              
name="lname"                                   
value={category} onChange={(e) => {setCategory(e.target.value)}}
/>


</div>
<div className="mb-3">
<label htmlFor="Username" className="form-label">
model number
</label>
                                                  
<input                                          
type={"text"}                                 
className="form-control"                       
placeholder="Enter your Category"              
name="lname"                                   
value={model_no} onChange={(e) => {setModel_no(e.target.value)}}
/>


</div>

<div className="mb-3">
<label htmlFor="Email" className="form-label">
Price
</label>


<input
type={"number"}
className="form-control"
placeholder="Enter your e-mail address"
name="price"
value={price} onChange={(e) => {setPrice(e.target.value)}}
/>



      
<div className="mb-3">
<label htmlFor="password" className="form-label">
Description
</label>
<input
type={"text"}
className="form-control"
placeholder="Enter your description"
name="text"
value={description} onChange={(e) => {setDescription(e.target.value)}}
 /> 

<div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <div className="ml-4">
          
            {image && (
              <img src={`http://65.1.134.51:3001/uploads/${image}`} alt="Fetched" className="img-thumbnail"  style={{ width: '100px', height: '100px' }}/>
            )}
     
            {selectedImage && (
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="img-thumbnail"  style={{ width: '100px', height: '100px' }}/>
            )}
          </div>
        </div>




</div> 


<button className='btn btn-success'>Update</button>
</div>

{/* 
<form onSubmit={updateUser}>

<input className="button" type="submit" value="Update User" />
</form> */}





<Link className="btn btn-outline-danger mx-2" to="/products">
Cancel
</Link>

</div>
</div>
</form>
</div>


</>
  )
}

export default Prodisplay