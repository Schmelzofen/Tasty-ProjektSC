import React, { Component } from 'react';
import Meals from "../../json/Meals.json"
import SubCategoryTemplate from "../../components/SubCategory/SubCategoryTemplate"
import HeaderAll from '../Header/HeaderAll'
class SubCategory extends Component {
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
                <HeaderAll/>
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
 
export default SubCategory;


