import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import Header from "../Header/Header"
let tempArray = []
let field = ''


class Search extends React.Component {
    state = {
        meals: Meals.meals,
        results: [],
    }

    search = () => {
        tempArray = []
        this.setState({ results: [] })
        let input = document.getElementById('field')
        field = input.value
        field = field.toLowerCase()
        console.log(field);
        for (let i = 0; i < this.state.meals.length; i++) {
            if ((this.state.meals[i].strMeal.toLowerCase()).includes(field)) {
                tempArray.push(this.state.meals[i]);
                console.log(this.state.meals[i]);
            }
           
        }
        this.setState({ results: tempArray })
        
    }

    
    render() {
       
        
        
        return (
            <div>
                
               <Header search={this.search}/>
                {this.state.results.map(e=>
                    <p>{e.strMeal}</p>
                    )}
            </div>
        )
    }
}
export default Search;