import React, { PropTypes } from 'react';
import style from "./style.module.scss"


const Daybox = ({text}) => {
    return (
        <div className={style.mainContent}>
            <p> {text} </p>
        </div>
    );
};

Daybox.propTypes = {
    
};

export default Daybox;