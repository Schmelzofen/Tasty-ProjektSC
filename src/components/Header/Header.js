import React, { Component } from 'react';
import navLogo from "../../img/nav.png"
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
let tempArray = []
let field = ''
class Header extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        meals: Meals.meals,
        results: [],
        inpValue : ''
    }
    componentDidUpdate(){
        field = this.state.inpValue
        console.log(field)
    }

    render() {
        let search = () => {
            let input = document.getElementById('field')
            field = input.value
            field = field.toLowerCase()
            this.setState({inpValue:field})
            
        }

        return (
            <section className="Header">
                <Link to="/"><img src={navLogo} alt="navLogo" /></Link>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <input onChange={event=>{ this.setState({inpValue: event.target.value})}}  id="field" type="text" placeholder="Type something to search" />
                <button  ><Link to='/search/${this.state.inpValue}' >Search</Link></button>
            </section>
        );
    }
}

export { field, tempArray };
export default Header;