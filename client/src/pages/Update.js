
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";


function Update() {

    const [updateStatus, setUpdateStatus] = useState("");
    
    const [newFname, setNewFame] = useState("");
    const [newLname, setNewLname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("")

    const [usersList, setUsersList] = useState([]);
    const updateUser  = (UId) => {
        Axios.put("http://65.1.134.51:3001/update", { fname: newFname, lname: newLname, email: newEmail, password: newPassword, id:UId }).then(
          (response) => {
            setUsersList(
              usersList.map((user) => {
                return user.UId === UId
                  ? {
                      id: user.UId,
                      fname: newFname,
                      lname: newLname,
                      email: newEmail,
                      password: newPassword
                    }
                  : user;
              })
            );
          }
        );
      };

  return (

<>


            <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User </h2>

            <form >
            <div className="mb-3">
            <label htmlFor="Name" className="form-label">
            First  Name
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your name"
            name="fname"
            onChange={(e) => {setNewFame(e.target.value)}}
             />            
            </div>

            <div className="mb-3">
            <label htmlFor="Username" className="form-label">
            Last Name
            </label>
                                                              
         <input                                          
          type={"text"}                                 
          className="form-control"                       
          placeholder="Enter your lastname"              
          name="lname"                                   
          onChange={(e) => {setNewLname(e.target.value)}} 
          />                                                                                                                                                                                
         </div>

        <div className="mb-3">
        <label htmlFor="Email" className="form-label">
        E-mail
        </label>

        <input
        type={"text"}
        className="form-control"
        placeholder="Enter your e-mail address"
        name="email"
        onChange={(e) => {setNewEmail(e.target.value)}}
        />
                  
      <div className="mb-3">
      <label htmlFor="password" className="form-label">
      Password
      </label>
      <input
      type={"password"}
      className="form-control"
      placeholder="Enter your password"
      name="password"
      onChange={(e) => {setNewPassword(e.target.value)}}
      />
      </div>
      </div>
            
            <input className="button" type="submit" onClick={updateUser} value="submit" />
            <Link className="btn btn-outline-danger mx-2" to="/users">
            Cancel
            </Link>
            </form>
            </div>
            </div>
            </div>
 
</>
  )
}

export default Update