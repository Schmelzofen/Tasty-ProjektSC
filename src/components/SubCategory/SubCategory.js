import React, { Component } from 'react';
<<<<<<< HEAD
import CategoriesJson from "../../json/categories.json"
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
class SubCaterogy extends React.Component {
=======
import Meals from "../../json/Meals.json"


class SubCategory extends Component {
>>>>>>> b98b33797dc61a71f9d295836f21d615c21ed213
    constructor(props) {
        super(props);
        this.state = {
            subData: [],
        }
    }
   
    
    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.name}`)
            .then(response => response.json())
            .then(json => this.setState({ subData: json.meals }))
    }

    render() {
        console.log({ Meals })
        return (
            <section className="SubCategory">
                <h1>Delicious food!</h1>
                <article className="SubCategoryGridContainer">
                    {this.state.subData.map(e => <SubCategoryTemplate
                        name={e.strMeal.slice(0, 37)}
                        picture={e.strMealThumb}
                        key={e.idMeal}
                        id={e.idMeal}
                    />)}
                </article>
            </section>);
    }
}
 
export default SubCaterogy;


