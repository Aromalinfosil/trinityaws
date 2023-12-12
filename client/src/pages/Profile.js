import React,{useEffect,useState} from 'react'
import Header from '../components/common/Header';
import Axios from "axios";
import { Link, useParams,useNavigate } from 'react-router-dom';

import Cdoor from '../components/sliders/Cdoor';

const Profile = (props) => {


    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [addresstwo, setAddresstwo] = useState("");
    const [email, setEmail] = useState("");
    const [post, setPost] = useState("");
    const [state, setState] = useState("");
    const [country, setcountry] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const  navigate = useNavigate();

     const [registerStatus, setRegisterStatus] = useState("");
     const [users, setUsers] = useState([]);
     
	const userFirstName = sessionStorage.getItem('profile name');
     const {UId} = useParams();


        
      useEffect(() => {
     fetchUser();
      }, []);

        
         function fetchUser() {
          Axios.get(`http://65.1.134.51:3001/users/${UId}`)
    
            .then((response) => {
            console.log(response.data);
            console.log("profile found")
           
            setFname(response.data.fname);
            setLname(response.data.lname);
            setEmail(response.data.email);         
            setPassword(response.data.password);
            setPost(response.data.post);
            setState(response.data.state);
            setAddress(response.data.address);
            setPhone(response.data.phone);

            })
            .catch((error) => {
            console.error('Error fetching  profile:', error);
             console.log("Profile not found");
            console.error(error);
            });

    
            }
            const handleUpdate = () => {
            const updatedUser = {
            fname,
            lname,
            email,
            password,
            address,
            post,
            state,
            phone

        
            };
        
            Axios.put(`http://65.1.134.51:3001/profile/${UId}`, updatedUser)
            .then((response) => {
            console.log("User updated successfully:", response.data);
            })

                 
            .catch((error) => {
            console.error('Error updating user:', error);
                
                });
                };
              

            useEffect(() => {
                const storedLoggedInState = localStorage.getItem('isLoggedIn');
                if (storedLoggedInState === 'true') {
                setIsLoggedIn(true);
                }
                }, [])



  





    
        
 
    return (
        <>
        <Header ></Header><br/><br/><br/><br/><br/><br/><br/>
       
    <div class="">
    <div class="row">
    <div class="col-md-3 border-right">
    <div class="profile-img">
            
    {/* <img src="../ass/images/60111.jpg" alt="" />
    <div class="file btn btn-lg btn-primary">
    Change Photo
        <input type="file" name="file"/>
        </div> */}


         </div> </div>
        <div class="col-md-5 border-right">
        <div class="p-3 py-5">
        <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-right">Profile Settings</h4>
       
        </div>
        <form>
     
        <div class="row mt-2">
        <div class="col-md-6"><label class="labels">Name</label>
        <input type="name"  onChange={(e) =>{setFname(e.target.value)}} value ={fname} class="form-control" placeholder="First Name"/></div>
      
        <div class="col-md-6"><label class="labels">Surname</label>  <input type="name"  onChange={(e) =>{setLname(e.target.value)}} value ={lname}class="form-control" placeholder="Surname"/></div>
        </div>

        <div class="row mt-3">
        <div class="col-md-12"><label class="labels">Mobile Number</label><input type="number"  onChange={(e) =>{setPhone(e.target.value)}} value ={phone} class="form-control"  placeholder="Mobile Number"/></div>
        <div class="col-md-12"><label class="labels">Email ID</label><input type="email"  onChange={(e) =>{setEmail(e.target.value)}}value ={email} class="form-control"  placeholder="Email ID"/></div>
        <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" onChange={(e) =>{setAddress(e.target.value)}} value ={address} class="form-control"  placeholder="Address Line 1"/></div>
        <div class="col-md-12"><label class="labels">Password</label><input type="password"   onChange={(e) =>{setPassword(e.target.value)}}value ={password} class="form-control"  placeholder="Password"/></div>
        <div class="col-md-12"><label class="labels">Postcode</label><input type="number"  onChange={(e) =>{setPost(e.target.value)}} value ={post} class="form-control"  placeholder="Postcode"/></div>
        <div class="col-md-12"><label class="labels">State</label><input type="text"   onChange={(e) =>{setState(e.target.value)}} value ={state} class="form-control"  placeholder="State"/></div> 
                      
              
        </div>

        <div class="row mt-3">        
        {/* <div class="col-md-6"><label class="labels">Phone</label><input type="text"  onChange={(e) =>{setPhone(e.target.value)}} value ={phone} class="form-control"  placeholder="Phone Number"/></div>  */}
        
        </div><br/><br/><br/>
        
        <button className='btn btn-success' onClick={handleUpdate}>Update</button>
        {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={profile}>Save Profile</button></div> */}

        {/* <div className="d-grid gap-2 mt-3">        
        <input className="button" type="submit" onClick={profile} value="Sign UP" />
        <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
        </div> */}



</form>

        </div>
 
        </div>   
        </div>
        </div>
       
        </> 

     
    );
};

export default Profile;

