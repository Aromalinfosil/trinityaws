import React, { useContext, useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
import useForm from '../../hooks/useForm';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";
import axios from 'axios';
import Cookies from 'js-cookie';


const AccountForm = () => {

    const [emailExists, setEmailExists] = useState(false);
    const [formValid, setFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [post, setPost] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState(""); 
     const [registerStatus, setRegisterStatus] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 

   
    const submit = () =>{
    axios.post("http://65.1.134.51:3001/register").then((res)=>{
    console.log()
    })
    .catch((err)=>{
    console.log(err)
    })
    }



    const login = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setLoginStatus('Please fill out both email and password fields.');
        return;
      }
  
      Axios.post("http://65.1.134.51:3001/login", {
        email: email,
        password: password,
      }).then((response) => {
        console.log(response.data);
  
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus('Login success');
          sessionStorage.setItem('userFirstName', response.data.fname);
          sessionStorage.setItem('useid', response.data.UId);
          localStorage.setItem('isLoggedIn', true);
  
          // Store user details in cookies
          Cookies.set('userFirstName', response.data.fname);
          Cookies.set('useid', response.data.UId);
          Cookies.set('isLoggedIn', true);
  
          window.location.href = "/";
          setIsLoggedIn(true);
        }
  
        if (email === 'admin@gmail.com' && password === 'admin') {
          setLoginStatus('Welcome Admin');
          window.location.href = "/dash";
          setIsLoggedIn(true);
  
          // Store admin details in cookies
          Cookies.set('userFirstName', 'Admin');
          Cookies.set('useid', 'adminId');
          Cookies.set('isLoggedIn', true);
        }
      });
    }

    
            const register = (e) => {  
            e.preventDefault();

            // if (!fname || !lname || !email || !address || !phone || !password) {
            // setRegisterStatus('Please fill out all fields.');
            // return;
            // }
          
            Axios.get(`http://65.1.134.51:3001/check-email?email=${email}`).then((response) => {
            if (response.data.exists) {
            setEmailExists(true);
            } else {
            Axios.post("http://65.1.134.51:3001/register", {
            fname: fname,
            lname: lname,
            email: email,
            password: password, 
            address : address,
            post : post,
            state: state,
            phone : phone,

            }).then((response) => {
            if (response.data.message) {
            setRegisterStatus(response.data.message);
            } else {
            setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
            window.location.href = "/";
            }
            }).catch((error) => {
            console.error("Error registering:", error);
            });
            }
            }).catch((error) => {
            console.error("Error checking email:", error);
            });
            };
      




    const { isFormOpen, toggleForm } = useContext(commonContext);
    const { inputValues, handleInputValues, handleFormSubmit } = useForm();



    const formRef = useRef();

    useOutsideClose(formRef, () => {
        toggleForm(false);
    });

    useScrollDisable(isFormOpen);


    const [isSignupVisible, setIsSignupVisible] = useState(false);


    // Signup-form visibility toggling

    const handleIsSignupVisible = () => {
    setIsSignupVisible(prevState => !prevState);
    };

   

    

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleForgotPassword = () => {
  };

    return (
        <>
        <>

      <Modal show={show1} onHide={handleClose1} animation={false}>  
      <Modal.Header class="" closeButton></Modal.Header>     
      <Modal.Body class="modal_centered">	<div class="modal_centered">
   
      <h5 class="mohed">Registration form</h5>       
      <h6 class="pmodal">New to Trinty ? <a href='' onClick={handleIsSignupVisible}><font color="red"> login</font></a></h6>

      <form action="" method="post">

        <div className="form_body">                             
 

        <div className="form-control gp">  
        <label class="intxty">Enter your First Name</label> &nbsp; &nbsp; &nbsp;
        <input type="text" name="fname" onChange={(e) =>{setFname(e.target.value)}}  required /><br></br>
        </div>

      
        <div className="form-control gp">  
        <label class="intxty">Enter your Last Name</label> &nbsp; &nbsp; &nbsp;
        <input className="" type="username" name="lname" onChange={(e) =>{setLname(e.target.value)}} required /> <br></br>
        </div>

 
        <div className="form-control gp">  
        <label class="intxty">Enter your Email</label> &nbsp; &nbsp; &nbsp;
        <input className=""  type="email"   name="email" onChange={(e) =>{setEmail(e.target.value)}}  required />
        {emailExists && <p style={{ color: 'red' }}>This Email id is already exist!</p>}
        </div>



        <div className="form-control gp">  
        <label class="intxty">Enter your Password</label> &nbsp; &nbsp; &nbsp;
        <input className="" type="password" name="password" onChange={(e) =>{setPassword(e.target.value)}} required /> 
        </div>
 
          <div className="">  
         <center><input  class="custom-btn btn-1" type="submit" onClick={register}  /></center>
         <div style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</div>
        </div>  

           



             

       

 

          <div className="form_foot">
      <p>or login with</p>
      <div className="login_options">
      <Link to="/">Facebook</Link>
      <Link to="/">Google</Link>
      <Link to="/">Twitter</Link>
       </div>
      </div>
        </div>  
        </form>           
        </div>
       
       </Modal.Body>  
   
       </Modal>
</>
        {
        isFormOpen && (
        <div className="backdrop">
        <div className="modal_centered">
        <form id="account_form" ref={formRef} onSubmit={handleFormSubmit}>
          

     

        {/*===== Form-Header =====*/}
        <div className="form_head">
        <h2>{isSignupVisible ? 'Signup' : 'Login'}</h2>
        <p>
        {isSignupVisible ? 'Already have an account ?' : 'New to Trinty ?'}
        &nbsp;&nbsp;


      <button type="button" onClick={(e)=>{handleShow1();submit()}}>
      <font color="red">Login</font>:<font color="red">Create an account</font> 
      </button>

      </p>
      </div>

      {/*===== Form-Body =====*/}
      <div className="form_body">                             
    
      
      <div className="input_box">
     <label class="intxt">Email</label> &nbsp; &nbsp; &nbsp;
      <input  type="email" name="email" onChange={(e) => {setEmail(e.target.value)}}    required />
      </div>

      <div className="input_box">
      <label class="intxt">password</label> &nbsp; &nbsp; &nbsp;
      <input  type="password" name="password"  onChange={(e) => {setPassword(e.target.value)}}   required />
      </div>
      



      {/* <div className="input_box">
      <input type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
      </div> */}

     <center> <input className="custom-btn btn-1" type="submit" onClick={login} value="Login" /> </center> &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="forgot_password_button" onClick={handleForgotPassword}>Forgot Password?</button>


      <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>



      </div>

      {/*===== Form-Footer =====*/}

      <div className="form_foot">
      <p>or login with</p>
      <div className="login_options">
      <Link to="/">Facebook</Link>
      <Link to="/">Google</Link>
      <Link to="/">Twitter</Link>
      </div>
      </div>

      {/*===== Form-Close-Btn =====*/}
      <div
      className="close_btn"
      title="Close"
      onClick={() => toggleForm(false)}
      >
      &times;
      </div>
      </form>
      </div>
      </div>
      )
      }
      </>
      );
      };

export default AccountForm;