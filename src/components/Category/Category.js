<<<<<<< HEAD
import React, { Component } from 'react';
import CategoryTemplate from '../Category/CategoryTemplate';
import { v4 as uuidv4 } from 'uuid';
import CategoriesJson from '../../json/categories.json'
=======
import CategoryTemplate from "./CategoryTemplate"
import React, { Component } from 'react';
>>>>>>> main

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { cats: []}
    }

<<<<<<< HEAD
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
=======
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [],
        }
    }


    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json => this.setState({ myArr: json.categories }, () => {
                console.log(this.state.myArr)
            }))
    }
    render() {
        return (
            <section className="Category">
                <h1>Or go through our categories</h1>
                <article className="CategoryGridContainer">
                    {this.state.myArr.map(item => <CategoryTemplate
                        id={item.idCategory}
                        key={item.idCategory}
                        name={item.strCategory}
                        picture={item.strCategoryThumb}
                    />)}
                </article>
            </section>
        )
    }
>>>>>>> main
}
 
export default Category ;



