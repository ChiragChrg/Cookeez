import React, { useState } from 'react';
import RecipeIngred from './RecipeIngred';
import style from './css/Recipe.module.css';

// Get API data from App.js
const Recipe = ({title,image,diet,calories,ingredients,url,serve}) => {

    // Toggle Ingredient Display 
    const [show , setShow] = useState(false);


    // Divide Calories by No. of Serves & Round off the value.
    const kcal = calories / serve;
    const calorie = Math.floor(kcal);

    // Display recipe data
    return(
        <div className={style.container}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.img} src={image} alt={title} />
            
            <div className={style.rinfo}>
                <div className={style.diet}>Diet : <br/>{diet}</div>
                <div className={style.serve}>Serve : <br/>{serve}</div>
                <div className={style.cal}> Calories : <br/>{calorie} Kcal / Serve</div>
            </div>

            <a id={style.post} href={url} target="_blank" rel="noopener noreferrer" className="fas fa-external-link-alt"> Full Post</a>
            <button onClick={()=> setShow(!show )} className={style.ibtn}>Ingredients</button>
            {show && <RecipeIngred className={style.ingred} ingredients={ingredients}/>}
        </div>
    );
};

export default Recipe; 