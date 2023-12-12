import React, { useContext, useEffect, useState } from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Door from '../components/sliders/Door';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import TopProducts1 from '../components/product/TopProducts1';
import Services from '../components/common/Services';
import { IoMdStar } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { displayMoney } from '../helpers/utils';
import cartContext from '../contexts/cart/cartContext';
import useActive from '../hooks/useActive';
import Header from '../components/common/Header';
import RelatedSlider from '../components/sliders/RelatedSlider';
import axios from 'axios';
import useDocTitle from '../hooks/useDocTitle';
import RelatedProduct from '../components/sliders/RelatedProduct';
const Hand = () => {

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


    return (
        
      <main> <Header /><br/><br/><br/><br></br><br></br>
     
			


      <hr/>
      <center>
      <h1 class="heading"><font color="#1b4106">Handicrafts </font></h1></center>
      <hr/>




    <section id="featured" className="section">
    <div class="a21"><center>New Arrivals...
    </center></div><br></br>
                   
    <RelatedSlider category="Handicrafts" />
    <div class="a21"><center>Handicrafts<hr/>
    </center></div><br></br><br></br>
    <RelatedProduct category="Handicrafts" />  
    </section>
    </main>
    );
    };

export default Hand;