import React, { Component } from 'react';
import CategoryTemplate from '../Category/CategoryTemplate';
import { v4 as uuidv4 } from 'uuid';
import CategoriesJson from '../../json/categories.json'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { cats: []}
    }

    render() { 
        let Array = this.state.cats
        Array.push(CategoriesJson.categories)
        let Array2 = Array[0]
        console.log(Array2);
       
        return (
            <section className="Category">
                {Array[0].map( i => <CategoryTemplate 
                    key = {uuidv4()}
                    id = {i.idCategory}
                    title = {i.strCategory}
                    src = {i.strCategoryThumb}
                />)}
            </section>
        );
    }   
}
 
export default Category ;



