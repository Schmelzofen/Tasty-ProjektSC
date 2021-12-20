import React, { Component } from 'react';
import CategoriesJson from "../../json/categories.json"
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
class SubCaterogy extends React.Component {
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
        console.log(this.state.subData)
        return (
            <section className="SubCategory">
                <h1>Everything Beef</h1>
                <article className="SubCategoryGridContainer">
                    {this.state.subData.map(e => <SubCategoryTemplate
                        name={e.strMeal}
                    />)}
                </article>
            </section>);
    }
}
 
export default SubCaterogy;


