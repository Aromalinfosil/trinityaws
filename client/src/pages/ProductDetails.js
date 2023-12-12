import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import { calculateDiscount, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import useActive from '../hooks/useActive';
import cartContext from '../contexts/cart/cartContext';
import productsData from '../data/productsData';
import SectionsHead from '../components/common/SectionsHead';
import RelatedSlider from '../components/sliders/RelatedSlider';
import ProductSummary from '../components/product/ProductSummary';
import Services from '../components/common/Services';
import Header from '../components/common/Header';
import axios from 'axios';
import Cookies from 'js-cookie';


const ProductDetails = () => {

    useDocTitle('Product Details');

    const { handleActive, activeClass } = useActive(0);

    const { addItem } = useContext(cartContext);

    const { id } = useParams();
    const [product, setProduct] = useState([null]);
    
    const {  ratings, rateCount } = product;



   
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [name, setName] = useState([]);
    const [category, setCategory] = useState([]);
    const[model_no,setModel_no] =useState([]);


   
    useEffect(() => {
        getProduct();
      }, []);
    
      function getProduct() {
        axios.get(`http://65.1.134.51:3001/product/${id}`)
          .then((response) => {
            console.log(response.data);
            setProduct(response.data);
            setName(response.data.name);
            setCategory(response.data.category);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setImage(response.data.image);
            setModel_no(response.data.model_no)
          })
          .catch((error) => {
            console.error('Error fetching product:', error);
            console.log("Product not found");
          });
      }
      const handleAddItem = () => {
        addItem(product);
        const UId = Cookies.get('useid');
        
        
        fetch('http://65.1.134.51:3001/cart/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...product, UId, quantity: 1 }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data found", data); // You can handle the response data here if needed
            window.location.reload();
          })
          .catch((error) => {
            console.log("data not found")
            console.error('Error adding product to cart:', error);
          });
      };

  
    return (
    <><>
    <Header></Header></><><br></br><br></br>
    <section id="product_details" className="section">
    <div className="container">
    <div className="wrapper prod_details_wrapper">

            {/*=== Product Details Left-content ===*/}
    <div className="prod_details_left_col">
                          
                        
                           
    <figure className="prod_details_img">
    { product.image && <img src={`http://65.1.134.51:3001/uploads/${image}`} alt="product-img" />}
    </figure>
    </div>

            {/*=== Product Details Right-content ===*/}
    <div className="prod_details_right_col">
            {/* <h1 className="prod_details_title">{name}</h1> */}
                          
    <h5 className="prod_details_info">Model: {model_no}</h5>
    <h5 className="prod_details_info">Dimension:  {description}</h5>
    <div className="prod_details_ratings">
    <span className="rating_star">

    {[...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)}
    </span>
    <span>|</span>
    <Link to="*">{ratings} Ratings</Link>
    </div>

    <div className="separator"></div>
    <div className="prod_details_price">
    <div className="price_box">
    <h2 className="price">
    ${price} &nbsp;                          
    </h2>

    {/* <h2 className="price">
    {category} &nbsp;                                   
    </h2> */}

      <span className="tax_txt">(Inclusive of all taxes)</span>
      </div>

      <div className="badge">
      <span><IoMdCheckmark /> In Stock</span>
      </div>
      </div>

        <div className="separator"></div>
            <div className="prod_details_offers">
            <h4>Offers and Discounts</h4>
            <ul>
            <li>No Cost EMI on Credit Card</li>
            <li>Pay Later & Avail Cashback</li>
            </ul>

                         
            </div>
            <div className="separator"></div>
            <div className="prod_details_offers">
            <div class="row">
            <div class="col-sm-3">
            <h4>Delivery</h4></div>
            <div class="col-sm-5">
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"><i class="fa-solid fa-location-dot"></i></span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div></div>
            <div class="col-sm-3">
            <button type='' class="small-btn"> check</button>
            </div>

            </div>
            </div>
            <div className="separator"></div>


          <div className="prod_details_buy_btn">
          <button
          type="button"
          className="small-btn text-white"
          onClick={handleAddItem}
          >
             
          Buy Now
          </button>
          </div>

          </div>
          </div>
          </div>
          </section>
          <div class="">
          {/* <ProductSummary {...product} /> */}
          </div>
          <div class="">
            <section id="related_products" className="section">
            <div className="container">
            {/* <SectionsHead heading="Related Products" /> */}
            <center><h2>Related Product</h2></center>
            <div class="container">
            <RelatedSlider category={category} /></div>
            </div>
            </section></div>
            {/* <div class="section_3">
            <Services /></div> */}
            </></>
           );
          };

        export default ProductDetails;

