import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from "../../components/SubCategory/SubCategoryTemplate"
import { field } from "../Header/Header"
let tempArray = []

class Search extends React.Component {
    state = {
        meals: Meals.meals,
        results: []
    }
    render() {
        let search = () => {
            tempArray = []
            this.setState({ results: [] })
            for (let i = 0; i < this.state.meals.length; i++) {
                if ((this.state.meals[i].strMeal.toLowerCase()).includes(field)) {
                    tempArray.push(this.state.meals[i]);
                }
            }
            this.setState({ results: tempArray })
        }
        search()
        return (
            {
                tempArray.map(i => <SubCategoryTemplate
                    key={uuidv4}
                    id={i.idMeal}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                />)
            }
        )
    }
}

export default Search;