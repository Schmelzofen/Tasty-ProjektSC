import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import { field } from "../Header/Header"
import { tempArray } from "../Header/Header"


// class Search extends React.Component {
//     state = {
//         meals: Meals.meals,  
//         results: []
//     }
//     render() {

//         return (
//             <div>
//                 <h1>test1</h1>
//             </div>
//         )
//     }
// }

// export default Search;

class Search extends React.Component {
    state = {
        meals: Meals.meals,
        results: [],
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
        console.log(tempArray);
        search()
        return (
            <div>
                {/* {tempArray.map(i => <SubCategoryTemplate
                    key={uuidv4}
                    id={i.idMeal}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                />)} */}

                {/* {tempArray.map(e =>
                    <p>{e.strMeal}</p>
                )} */}
                {console.log(tempArray + 'test1')}
            </div>
        )
    }
}
export default Search;