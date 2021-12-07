import React, { PropTypes } from 'react';
import style from "./style.module.scss"
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import background from '../images/background.jpg'
import Categories from '../components/Categories';
import Conditions from '../components/Conditions';
import Footer from '../components/Footer';

const Home = props => {
    return (
        <div className={style.homeBody} style={{ backgroundImage: `url(${background})`, backgroundSize: "100% auto", backgroundSize: "cover" }}>
            <Navbar/>  
            <Main/>
            <Conditions/>
            <Categories/>
            <Footer/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;