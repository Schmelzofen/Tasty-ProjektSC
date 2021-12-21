import React, { Component } from 'react';
import HeaderAll from '../Header/HeaderAll'
import CategoryTemplate from "./CategoryTemplate"
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [],
            val: "",
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
               <HeaderAll/>
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
        );
    }   
}
 
export default Category ;



