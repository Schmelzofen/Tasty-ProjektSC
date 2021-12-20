import React, { Component } from 'react';
import CategoriesJson from "../../json/categories.json"
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import { useParams } from "react-router";

const SubCategory = () => {
    let {id} = useParams()
    let data = CategoriesJson.filter(i => i.idCategory === id)^
    console.log(data)

    return ( 
        <div className='Subcategory' >

        </div>
     );
}
 
export default SubCategory;




