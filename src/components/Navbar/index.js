import React, { PropTypes } from 'react';
import style from "./style.module.scss"

const Navbar = props => {
    return (
        <>
        <div className={style.nav}>
            <div className={style.navbarContainer}>

                <div className={style.navLogo}>
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/navbar-logo.png`}></img>
                </div>

                <div className={style.navOptions}>   
                    <a href="#"> Upcoming Shows </a>
                    <a href="#"> Be part of it </a>    
                    <a href="#"> Past Shows </a>    
                    <a href="#"> Resources </a>    
                    <a href="#"> About us </a>      
                    <a href="#"> Contact us </a>              
                </div>

                <div className={style.navBurgerMenu}>
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/menu-button-of-three-horizontal-lines.png`}></img>
                </div>

            </div>
        </div>    
        </>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;