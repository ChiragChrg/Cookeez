import React from 'react';
import {v4 as uuidv4} from 'uuid';
import style from './css/Recipe.module.css';


// Get Recipe Ingredients from Recipe.js
const recipeIngred = ({ingredients}) => {
    return ingredients.map(ingredient => {

        // Display Ingredients i Order
        return(
            <ul className={style.ingredul} key={uuidv4()}>
                    <li className={style.ingredli}>{ingredient.text}</li>
                    {/* <li>Weight-{ingredient.weight}</li> */}
            </ul>
        )
    });
}

export default recipeIngred;