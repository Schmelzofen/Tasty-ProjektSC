import React, { Component } from 'react';
import CategoriesJson from "../../json/categories.json"
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const SubCategory = (props) => {
    let {title} = useParams()
    let data = CategoriesJson.filter(i => i.title === props.id)
    console.log(data)

    return ( 
        <div className='Subcategory' >
            {data.map(i => <SubCategoryTemplate
                key = {uuidv4()}
                title = {i.strMeal}
                src = {i.strMealThumb}
            />)}
        </div>
     );
}
 
export default SubCategory;

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood


