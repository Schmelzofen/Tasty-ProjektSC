import React, { Component } from 'react';
import navLogo from "../../img/nav.png"
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from '../SubCategory/SubCategoryTemplate';

let tempArray = []
let field = ''
class Header extends Component {

   
    render() {
        
        return (
            <section className="Header">
                <Link to="/"><img src={navLogo} alt="navLogo" /></Link>
                <h1>Find a recipe, an idea, an inspiration...</h1>
               
                <button  onClick={this.props.search}><Link to='/Search' >Search</Link></button>
                
            </section>
        );
    }
}

export { field, tempArray };
export default Header;