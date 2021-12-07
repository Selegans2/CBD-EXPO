import React, { PropTypes } from 'react';
import style from "./style.module.scss"
import Daybox from '../DayBox';

const Main = props => {
    return (
        <div className={style.mainBody}>

            <div className={style.mainLogo}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/awards-logo.png`}></img>
            </div>

            <div className={style.mainContent}>
                <p> Nominate your brand for a chance to win an award at USA CBD Expo Atlanta! </p>

                <div className={style.mainContentDays}>
                    <p> NOMINATION ENDS IN </p>
                    <div className={style.mainContentDaysComponents}>
                        <Daybox text="12 DAYS"/>
                        <Daybox text="14 HRS"/>
                        <Daybox text="07 MIN"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;