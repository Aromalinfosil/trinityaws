import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';





function Dash() {

  const[record,setRecord] = useState([])
 
  const getData = () =>
  {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposne=> resposne.json())
      .then(res=>setRecord(res))
  }

  useEffect(() => {
     getData();
  },)


  return (

        <div>

          <div class="col main pt-5 mt-3">         
          <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Home</a></li>
            
         </ol>
         </nav>
         <p class="lead d-none d-sm-block">Add Employee Details and Records</p>
  
         <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
          </button>
          <strong>Data and Records</strong> Learn more about employee
          </div>
          <div class="row mb-3">
          <div class="col-xl-3 col-sm-6 py-2">
          <div class="card bg-success text-white h-100">
          <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
          <div class="rotate">
          <i class="fa fa-user fa-4x"></i>
          </div>

          <h6 class="text-white"><Link to={`/users`}>Manage Users</Link> </h6>
          <h1 class="display-4">134</h1>
          </div>
          </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-danger h-100">
          <div class="card-body bg-danger">
          <div class="rotate">
          <i class="fa fa-list fa-4x"></i>
          </div>

          <h6 class="text-uppercase"><Link to={`/product`}>Manage Products</Link></h6>
           <h1 class="display-4">87</h1>
          </div>
          </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-info h-100">
          <div class="card-body bg-info">
          <div class="rotate">
          <i class="fab fa-twitter fa-4x"></i>
          </div>
          <h6 class="text-uppercase"><Link to={`/orders`}>Order Summary Details</Link></h6>
          <h1 class="display-4">125</h1>
          </div>
          </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-warning h-100">
          <div class="card-body">
          <div class="rotate">
          <i class="fa fa-share fa-4x"></i>
          </div>
          <h6 class="text-uppercase">Shares</h6>
          <h1 class="display-4">36</h1>
          </div>
          </div>
          </div>
          </div>
  
         <hr/>
        
        
         <div class="row ">
        <div class="col-lg-7 col-md-6 col-sm-12">
        <h5 class="mt-3 mb-3 text-secondary">
        Check More Records of Employees
        </h5>
        <div class="table-responsive">
        <table class="table table-striped">
       <thead class="thead-light">
                             <tr>
                              
                              <th>id</th>
                              <th>Name</th>
                              <th>Username</th>
                              <th>Email</th>
                                 
                          </tr>
                         </thead>
                         <tbody> <br></br>
                          {record.slice(0, 5).map((output)=>
                          <tr>
                                 <td>{output.id}</td>
                                 <td>{output.name}</td>
                                 <td>{output.username}</td>
                                 <td>{output.email}</td>
                           
                                 <td></td>
                                </tr>
                                 )}
                                </tbody>
                                </table>
                                </div>
                                </div>
    <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">

 </div>
    </div>
        
    <a id="more"></a>
    <hr/>
        
    </div>          
    </div>
            
  )
}

export default Dash