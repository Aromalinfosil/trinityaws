import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";

function Users() {
    const [loginStatus, setLoginStatus] = useState("");
    const [users, setUsers] = useState([]);
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);


    function getUsers() {
         
        console.log("user are displaying")
        Axios.get("http://65.1.134.51:3001/users").then(function(response) {
        console.log(response.data);
        setUsers(response.data);
        });
        }

        const deleteUser = (UId) => {
        Axios.delete(`http://65.1.134.51:3001/delete/${UId}`).then((response) => {
        if (response.data.message) {
        setLoginStatus(response.data.message);
        } else {
        setLoginStatus('login success');
        // Filter out the deleted user from the users state
        setUsers(users.filter(user => user.UId !== UId));
        }
        });
        };
      

       return (
        <div>


        <div className="row">
        <div className="col-12">
        <h1>List Users</h1>
        <table class="table table-bordered table-striped">
        <thead>

        <tr>
                       
                        <th>First Name</th>
                        <th>Lirst Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Delete</th>
        </tr>

        </thead>
        <tbody>
        {users.map((user, key) =>
                <tr key={key}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>

                
                <td>
    {/* <Link to={`/update/${user.UId}`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link> */}

    <button onClick={() => deleteUser(user.UId) } className="btn btn-danger">Delete</button>

    </td>
    </tr>
    )}
                     
         </tbody>
         </table>
        </div>
        </div>
        </div>
    
    )}

export default Users