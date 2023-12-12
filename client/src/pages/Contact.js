import React from 'react'
import Header from '../components/common/Header';
function Contact() {
  return (
    <>
      <Header /><br/><br/><br/><br></br><br></br>
	<div class="middle-text-info6 ">
                        <div className='color-box'>
                            <h1>your Home is more secure now</h1>
							
                            </div></div><br></br><br></br>
                            <div class="a21"><center>Contact</center></div>
    <div>
    <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="https://formsubmit.co/aswanth.infosil@gmail.com" method="POST" class="contact-form">
    <div>

    <input type="text"  name="name"  class="form-control rounded border-white mb-3 form-input"  placeholder="Name" required/>
    </div>
    <div>

   
   
 

 
        <input type="email"  name="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
        </div>
        <div>

 

        <input type="number"  name="phone"  class="form-control rounded border-white mb-3 form-input" placeholder="Phone" required/>
        </div>
        <div>

        <textarea id="message"  name="message"  class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
         </div>
         <div class="submit-button-wrapper">
         <center>
         <button  type="submit" class="small-btn">Send</button></center>
         </div>
    </form>
  </div>
</div>
    
<div class="container">
    <div class="row">
        <div class="col-sm-4">
<center><h1><i class="fa-solid fa-location-dot"></i></h1></center>
<center><h3>Location</h3></center>
<center><p>  ABN 47620213283<br></br>
Address : 50, Manderston Ave, Derrimut, VIC, 3026</p></center>
        </div>
        <div class="col-sm-4">
<center><h1><i class="fa-solid fa-envelope"></i></h1></center>
<center><h3>Have any Question?</h3></center>
<center><p>Email :<a href='mailto:sales@trinityfurnitures.com'> sales@trinityfurnitures.com.au</a></p></center>
        </div>
        <div class="col-sm-4">

<center><h1><i class="fa-solid fa-phone"></i></h1></center>
<center><h3>Phone Number</h3></center>
<center><p>(123)456-789-10</p></center>
        </div>
    </div>
</div>
<div class="bottm1"></div>





    </>
  )
}

export default Contact