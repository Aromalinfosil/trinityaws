import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import Doors from '../pages/Doors';
import Pdoors from '../pages/Pdoors';
import Cdoors from '../pages/Cdoors';
import Edoors from '../pages/Edoors';
import Cadoors from '../pages/Cadoors';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';
import Dash from '../pages/Dash';
import Beds from '../pages/Beds';
import Users from '../pages/Users';
import Product from '../pages/Product';
import Products from '../pages/Products';
import Update from '../pages/Update';
import Header from '../components/common/Header';
import Abeds from '../pages/Abeds';
import Qbeds from '../pages/Qbeds';
import Sbeds from '../pages/Sbeds';
import Sofas from '../pages/Sofas';
import Tsofas from '../pages/Tsofas';
import Asofas from '../pages/Asofas';
import Dining from '../pages/Dining';
import Adining from '../pages/Adining';
import Wardrobe from '../pages/Wardrobe';
import Showcabinet from '../pages/Showcabinet';
import Tvunit from '../pages/Tvunit';
import DressingT from '../pages/DressingT';
import Kitchencabinet from '../pages/Kitchencabinet';
import Terraceset from '../pages/Terraceset';
import Workstation from '../pages/Workstation';
import Poojamandapam from '../pages/Poojamandapam';
import Otherp from '../pages/Otherp';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';   
import Service from '../pages/Service';
import ConfettiCannon from '../pages/ConfettiCannon';
import ProductGallery from '../pages/ProductGallery';
import Prodisplay from '../pages/Prodisplay';
import Bench from '../pages/Bench';
import Partition from '../pages/Partition';
import Clock from '../pages/Clock';
import Pool from '../pages/Pool';
import Chair from '../pages/Chair';
import Coffee from '../pages/Coffee';
import Bedside from '../pages/Bedside';
import  Chest from '../pages/Chest';
import Edoor from '../pages/Edoor';
import Dbeds from '../pages/Dbeds';
import Bar from '../pages/Bar';
import Magazine from '../pages/Magazine';
import Shoe from '../pages/Shoe';
import Corner from '../pages/Corner';
import Bookshelf from '../pages/Bookshelf';
import Swing from '../pages/Swing';
import Trolley from'../pages/Trolley';
import Stool from '../pages/Stool';
import Flower from '../pages/Flower';
import Orderdetails from '../pages/Orderdetails';
import Wall from '../pages/Wall';
import Chairs from '../pages/Chairs';
import Cloth from '../pages/Cloth';
import Basket from '../pages/Basket';
import Hand from '../pages/Hand';
import Orderdelivery from '../pages/Orderdelivery';
import Orders from '../pages/Orders';
import Religious from '../pages/Religious';
import Categoryfilter from '../pages/Categoryfilter';
import Laptop from '../pages/Laptop';

 const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
        
        <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/Pdoors" element={<Pdoors/>} />
                <Route path="/Cdoors" element={<Cdoors/>} />
                <Route path="/Edoors" element={<Edoors/>} />
                <Route path="/Cadoors" element={<Cadoors/>} />
                <Route path="/Profile/:UId" element={<Profile/>} />
                <Route path="/Payment" element={<Payment/>} />
                <Route path="/Dash" element={<Dash/>} />
                <Route path="/Beds" element={<Beds/>} />
                <Route path="/Users" element={<Users/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/Update/:UId" element={<Update/>} />
                <Route path="/Bed" element={<Abeds/>} />
                <Route path="/Qbed" element={<Qbeds/>} />
                <Route path="/Sbeds" element={<Sbeds/>} />
                <Route path="/Sofa" element={<Sofas/>} />
                <Route path="/TelephoneSofa" element={<Tsofas/>} />
                <Route path="/Asofas" element={<Asofas/>} />
                <Route path="/Dining" element={<Dining/>} />
                <Route path="/Dining Set" element={<Adining/>} />
                <Route path="/Wardrobe" element={<Wardrobe/>} />
                <Route path="/Show Cabinet" element={<Showcabinet/>} />
                <Route path="/TV Unit" element={<Tvunit/>} />
                <Route path="/Dressing Table" element={<DressingT/>} />
                <Route path="/Kitchen Cabinet" element={<Kitchencabinet/>} />
                <Route path="/Terrace Set" element={<Terraceset/>} />
                <Route path="/Work Station" element={<Workstation/>} />
                <Route path="/Pooja" element={<Poojamandapam/>} />
                <Route path="/Otherp" element={<Otherp/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Footer" element={<Footer/>} />
                <Route path="/Service" element={<Service/>} />
                <Route path="/ConfettiCannon" element={<ConfettiCannon/>} />
                <Route path="/ProductGallery" element={<ProductGallery/>} />
                <Route path="/prodisplay/:id" element={<Prodisplay/>}/>
                <Route path = "/Bench" element={ <Bench />} />
                <Route path = "/partition" element={ <Partition />} />
                <Route path = "/Clock" element ={<Clock />} />
                <Route path = "/Pool Lounger" element={ <Pool />} />
                <Route path = "/Rocking Chair" element={ <Chair />} />
                <Route path = "/Coffee Table" element = {<Coffee />} />
                <Route path = '/Bedside' element= {<Bedside />} />
                <Route path = "/Chest" element = {<Chest />} />
                <Route path="/Door" element={<Edoor />} />
                <Route path= "/Dbeds" element={<Dbeds />} />
                <Route path="/Bar Cabinet" element={<Bar />} />
                <Route path = "/Magazine Holder" element={<Magazine />}/>
                <Route path = '/Shoe Rack' element={<Shoe />} />
                <Route path = '/Corner Rack' element={<Corner />}/>
                <Route path = '/Bookshelf' element={<Bookshelf />} />
                <Route path = '/Swing' element={<Swing />} />
                <Route path = '/Trolley' element={ <Trolley />} />
                <Route path = '/Stool' element= { <Stool />} />
                <Route path = '/Flower Vase' element={<Flower />} />
                <Route path="/Order" element={<Orderdetails/>}/>
                <Route path= "/Wall Mirror" element= {<Wall />} />
                <Route path = "/Chairs" element={<Chairs />} />
                <Route path = "/Cloth Hanger" element={<Cloth />} />
                <Route path = "/Display Basket Tray" element={<Basket />} />
                <Route path = "/Handicrafts" element={ <Hand />} />
                <Route path = '/Orderdelivery' element={ <Orderdelivery />} />
                <Route path = '/Orders' element={ <Orders />} />
                <Route path = '/Religious' element={ <Religious />} />
                <Route path="/category/:category" element={<Categoryfilter/>}/>
                <Route path = '/Religious' element={ <Religious />} /> 
                <Route path = '/Laptop Table' element={ <Laptop />} /> 
                
                
           

                </Routes>
        </>
    );
};

export default RouterRoutes;