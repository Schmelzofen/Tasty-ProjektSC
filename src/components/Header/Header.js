import React, { Component } from 'react';
import navLogo from "../../img/nav.png"
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from '../SubCategory/SubCategoryTemplate';
let tempArray = []
let field = ''
class Header extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        meals: Meals.meals,
        results: []
    }
    render() {
        let search = () => {
            tempArray = []
            this.setState({ results: [] })
            let input = document.getElementById('field')
            field = input.value
            field = field.toLowerCase()
            for (let i = 0; i < this.state.meals.length; i++) {
                if ((this.state.meals[i].strMeal.toLowerCase()).includes(field)) {
                    tempArray.push(this.state.meals[i]);
                }
            }
            this.setState({ results: tempArray })
        }
        // console.log(this.state.results)
        return (
            <section className="Header">
                <Link to="/"><img src={navLogo} alt="navLogo" /></Link>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <input id="field" type="text" type="text" placeholder="Type something to search" />
                <button onClick={search} >Search</button>
                {tempArray.map(i => <SubCategoryTemplate
                    key={uuidv4}
                    id={i.idMeal}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                />)}
            </section>
        );
    }
}
export { field };
export default Header;