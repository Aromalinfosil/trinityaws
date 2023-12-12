import React from 'react';




const Payment = (props) => {

 
    return (
<>
<div class="gridContainer">
      
      <div class="creditCard">
        <div class="visaLogo">
          
        </div>
        <div class="chipLogo">
					
        </div>
        <ul class="ccList">
          <li> </li>
        </ul>
        <h4 class="name"> </h4>
        <h4 class="year">   </h4>
      </div>
      <div class="div previousStep"> 
        <div class="arrow">
					
        </div>
        <p>Previous Step   </p>
      </div>
      <form action="#" id="paymentForm">
        <h6>Payment Details</h6>
        <div class="inputCon" id="name" data-top="Name on Card">
          <input type="text" placeholder="Arjun Kunwar"/>
        </div>
        <div class="inputCon" id="cardNum" data-top="Card Number" title = "type in the card number without spaces">
          <input type="text" placeholder="4567 3456 3456 3456"/>
        </div>
        <div class="inputCon" id="validYear" data-top="Valid Through">
          <input type="text" placeholder="09/20"/>
        </div>
        <div class="inputCon" id="cvv" data-top="CVV">
          <input type="text" placeholder="444"/>
        </div>
        <button>pay<span>$450.00</span></button>
      </form>
    </div>


</>

        );
    };
    
    export default Payment;
        