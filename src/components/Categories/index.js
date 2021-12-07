import React, { PropTypes } from 'react';
import style from "./style.module.scss"

const Categories = props => {
    return (
        <div className={style.categoryContent}>
            
            <div className={style.categoryList}>
                <p> CATEGORIES </p>
                <div className={style.categoryListIcons}>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-cbd-vape-icon.png`}></img>
                        <p> Best CBD Vape </p>
                    </div>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-cbd-edible-icon.png`}></img>
                        <p> Best CBD Edible </p>
                    </div>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-cbd-topical-icon.png`}></img>
                        <p> Best CBD Topical </p>
                    </div>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-cbd-tincture-icon.png`}></img>
                        <p> Best CBD Tincture </p>
                    </div>
                    
                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-cbd-flower-icon.png`}></img>
                        <p> Best CBD Flower </p>
                    </div>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-cbd-pet-product-icon.png`}></img>
                        <p> Best CBD Pet Products </p>
                    </div>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/most-innovative-cbd-product-icon.png`}></img>
                        <p> Most Innovative CBD Product </p>
                    </div>

                    <div className={style.icon}>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons/best-overall-branding-and-marketing-icon.png`}></img>
                        <p> Best Overall Branding & Marketing </p>
                    </div>

                </div>
            </div>

            <div className={style.categoryNominations}>

                <form className={style.categoryForm}>

                <div className={style.nomination}>
                    <div className={style.nomintationTitle}>
                        <p> Nomination #1 </p>
                    </div>

                    <select className={style.nomintationSelect} required>
                        <option value="0">*Select the category:</option>
                        <option value="1">CBD Vape</option>
                        <option value="2">CBD Edible</option>
                        <option value="3">CBD Topical</option>
                    </select>

                    <div className={style.nominationInput}>
                        <p> *Votes for duplicate products will not be considered </p>
                        <input type="text" id="lname" name="lastname" placeholder="*Write the product name here" required/>
                    </div>
                </div>

                <div className={style.nomination}>
                    <div className={style.nomintationTitle}>
                        <p> Nomination #2 </p>
                    </div>

                    <select className={style.nomintationSelect} required>
                        <option value="0">*Select the category:</option>
                        <option value="1">CBD Vape</option>
                        <option value="2">CBD Edible</option>
                        <option value="3">CBD Topical</option>
                    </select>

                    <div className={style.nominationInput}>
                        <p> *Votes for duplicate products will not be considered </p>
                        <input type="text" id="lname" name="lastname" placeholder="*Write the product name here" required/>
                    </div>
                </div>

                <div className={style.nomination}>
                    <div className={style.nomintationTitle}>
                        <p> Nomination #3 </p>
                    </div>

                    <select className={style.nomintationSelect} required>
                        <option value="0">*Select the category:</option>
                        <option value="1">CBD Vape</option>
                        <option value="2">CBD Edible</option>
                        <option value="3">CBD Topical</option>
                    </select>

                    <div className={style.nominationInput}>
                        <p> *Votes for duplicate products will not be considered </p>
                        <input type="text" id="lname" name="lastname" placeholder="*Write the product name here" required/>
                    </div>
                </div>

                
                <div className={style.nomination}>
                    <div className={style.nomintationTitle}>
                        <p> Contact Info </p>
                    </div>

                    
                    <div className={style.nominationInputSmall}>
                        <input type="text" id="lname" name="lastname" placeholder="*Full Name" required/>
                    </div>

                    <div className={style.nominationInputSmall}>
                        <input type="text" id="lname" name="lastname" placeholder="*Phone" required/>
                    </div>

                    <div className={style.nominationInputSmall} style={{marginRight:"2em"}}>
                        <input type="text" id="lname" name="lastname" placeholder="*Email" required/>
                    </div>

                </div>
                
                <button className={style.submitButton}> SUBMIT </button>
                </form>
                
            </div>
        </div>
    );
};

Categories.propTypes = {
    
};

export default Categories;