import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Cadoor from '../components/sliders/Cadoor';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import TopProducts1 from '../components/product/TopProducts1';
import Services from '../components/common/Services';
import { Link } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import { useContext } from 'react';
import { displayMoney } from '../helpers/utils';
import cartContext from '../contexts/cart/cartContext';
import useActive from '../hooks/useActive';
import Header from '../components/common/Header';
const Cadoors = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);
    return (
        
        <main>
             <Header />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>   <br></br>
<div class="a21"><center>Entrance Door</center></div><br></br>
<center><div class="fontp">Sed luctus orci sit amet tempor luctus. Nullam  </div></center><br></br><br></br>
<Cadoor/>
        </main>
    );
};

export default Cadoors;