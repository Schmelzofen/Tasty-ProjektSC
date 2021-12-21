import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import { field as fi} from "../Header/Header"
// import { tempArray } from "../Header/Header"
let tempArray;
class Search extends React.Component {
    state = {
        meals: Meals.meals,
        results: [],
        field: fi
    }
    // componentWillReceiveProps(){
    //     this.setState({results:[]})
    //     console.log('recieved change')
    // }
    componentWillMount(){
        tempArray = []
        // this.setState({ results: [] })
        for (let i = 0; i < this.state.meals.length; i++) {
            if ((this.state.meals[i].strMeal.toLowerCase()).includes(this.state.field)) {
                tempArray.push(this.state.meals[i]);
            }
        }
        this.setState({ results: tempArray })
        // this.setState({results:[]})
    }


    render() {
        return (
            <div onClick={()=>{console.log(this.state.field)}}>
                {this.state.results.map(i => <SubCategoryTemplate
                    key={uuidv4}
                    id={i.idMeal}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                />)}

                {/* {tempArray.map(e =>
                    <p>{e.strMeal}</p>
                )} */}
                {console.log(  'test1')}
            </div>
        )
    }
}
export default Search;