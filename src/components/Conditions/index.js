import React, { PropTypes } from 'react';
import style from "./style.module.scss"

const Conditions = props => {
    return (
        <div className={style.conditionsContent}>
            
            <div className={style.conditionsInstructions}>

                <div className={style.conditionsInstructionsContainer}>
                    <div className={style.conditionsInstructionsText}>
                        <p> 1. </p>
                        <p> Choose 3 of your favorite award categories… </p>
                    </div>

                    <div className={style.conditionsInstructionsText}>
                        <p> 2. </p>
                        <p> Nominate a different product in each category… </p>
                    </div>

                    <div className={style.conditionsInstructionsText}>
                        <p> 3. </p>
                        <p> Submit your form and wait for voting to begin! </p>
                    </div>
                </div>

            </div>

            <div className={style.conditionsTerms}>
                <p className={style.conditionsTermsTitle}> TERMS & CONDITIONS </p>

                <div className={style.conditionsTermsMainContainer}>
                    <div className={style.conditionsTermsContainer}>
                        <div className={style.conditionsTermsSection}>
                            <div className={style.conditionsTermsIcon}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/check-icon.png`}></img>
                            </div>

                            <div className={style.conditionsTermsText}>
                                <p> Nomination </p>
                                <p> You can nominate <span> UP TO 3 (THREE) DIFFERENT PRODUCTS.</span> </p>
                            </div>
                        </div>

                        <div className={style.conditionsTermsSection}>
                            <div className={style.conditionsTermsIcon}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/check-icon.png`}></img>
                            </div>

                            <div className={style.conditionsTermsText}>
                                <p> Duplication </p>
                                <p> All products must be different and each product can <span>ONLY</span> be in one category: </p>

                                <div className={style.conditionsTermsSubtext}>
                                    <div> ■ </div>
                                    <p> Product X <span>CAN</span> be nominated in <span>EITHER</span> Best CBD Edible <span>OR</span> Best CBD Flower.  </p>
                                </div>

                                <div className={style.conditionsTermsSubtext}>
                                    <div> ■ </div>
                                    <p> Product X <span>CANNOT</span> be submitted in <span>BOTH</span> Best CBD Edible <span>AND</span> Best CBD Flower.  </p>
                                </div>
                            </div>
                        </div>

                        <div className={style.conditionsTermsSection}>
                            <div className={style.conditionsTermsIcon}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/check-icon.png`}></img>
                            </div>

                            <div className={style.conditionsTermsText}>
                                <p> Restriction </p>
                                <p> <span>You must have a booth or sponsorship</span> at USA CBD EXPO Atlanta to qualify and win. </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.conditionsTermsContainer}>
                        <div className={style.conditionsTermsSection}>
                            <div className={style.conditionsTermsIcon}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/check-icon.png`}></img>
                            </div>

                            <div className={style.conditionsTermsText}>
                                <p> Qualification </p>
                                <p> Nominations that do not meet the criteria listed in our terms will not qualify.</p>
                            </div>
                        </div>

                        <div className={style.conditionsTermsSection}>
                            <div className={style.conditionsTermsIcon}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/check-icon.png`}></img>
                            </div>

                            <div className={style.conditionsTermsText}>
                                <p> Time </p>
                                <p> Nominations will close on Friday, May 29th at XX PM EST. </p>
                            </div>
                        </div>

                        <div className={style.conditionsTermsSection}>
                            <div className={style.conditionsTermsIcon}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/check-icon.png`}></img>
                            </div>

                            <div className={style.conditionsTermsText}>
                                <p> Votes </p>
                                <p> Public voting begins June 1 through June 12, closing at 11:59 EST. </p>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    );
};

Conditions.propTypes = {
    
};

export default Conditions;