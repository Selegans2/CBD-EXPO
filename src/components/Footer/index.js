import React, { PropTypes } from 'react';
import style from "./style.module.scss"

const Footer = props => {
    return (
        <div className={style.footerBody}>

            <div className={style.footerBodyContent}>

                <div className={style.footerBodyList}>
                    <p> UPCOMING SHOWS </p>
                    <a href="#"> ATLANTA 2021 </a>
                    <a href="#"> MEDELLIN 2021 </a>
                    <a href="#"> CHICAGO 2021 </a>
                </div>

                <div className={style.footerBodyList}>
                    <p> BE PART OF IT </p>
                    <a href="#"> BECOME AN EXHIBITOR </a>
                    <a href="#"> BECOME A SPONSOR</a>
                    <a href="#"> BECOME A SPEAKER</a>
                    <a href="#"> BECOME A MEDIA PARTNER</a>
                    <a href="#"> ATTEND </a>
                </div>

                <div className={style.footerBodyList}>
                    <p> PAST SHOWS </p>
                    <a href="#"> MIAMI 2019 </a>
                    <a href="#"> VEGAS 2020 </a>
                </div>

                <div className={style.footerBodyList}>
                    <p> RESOURCES </p>
                    <a href="#"> E-BOOKS </a>
                    <a href="#"> BLOGS AND NEWS </a>
                    <a href="#"> PRESS </a>
                </div>

                <div className={style.footerBodyList}>
                    <p> About us </p>
                </div>

                <div className={style.footerBodyList}>
                    <p> CONTACT US </p>
                    <a href="#"> FAQ </a>
                    <a href="#"> Tax & Sampling Information </a>
                </div>

            </div>

            <div className={style.footerBodyLogo}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/logoWhite.png`}></img>
            </div>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;