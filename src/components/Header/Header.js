import React, { Component } from 'react';
import navLogo from "../../img/nav.png"
<<<<<<< HEAD
import categories from "../../json/categories.json"
import {useState} from "react"
const Header = () => {
    const[query,setQuery] = useState("")
    return (
        <section className="Header">
            <img src={navLogo} alt="navLogo" />
            <h1>Find a recipe, an idea, an inspiration...</h1>
            <input type="text" placeholder="Type something to search" onChange={event => setQuery(event.target.value)} />
            <button>Search</button>
           
        </section>
       
       
    );
=======
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
        // console.log(tempArray)
        return (
            <section className="Header">
                <Link to="/"><img src={navLogo} alt="navLogo" /></Link>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <input id="field" type="text" placeholder="Type something to search" />
                <button  ><Link to='/Search' >Search</Link></button>
                {/* {tempArray.map(i => <SubCategoryTemplate
                    key={uuidv4}
                    id={i.idMeal}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                />)} */}
                {/* {tempArray.map(i => <p>
                    {i.strMeal}
                </p>)} */}
            </section>
        );
    }
>>>>>>> b98b33797dc61a71f9d295836f21d615c21ed213
}

export { field, tempArray };
export default Header;