import React, { Component } from 'react';
import CategoriesJson from "../../json/categories.json"
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
class SubCaterogy extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data:[],subId:[],subTags:[] }
    }
   
    
    componentDidMount() {

    fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.subId}`)
    .then(response => response.json())
    .then ( json => {
    this.setState({subTags:json}) 
})
    console.log(this.state.subTags);
    }

    
    
    
    render() { 
        let Array = this.state.data
        Array.push(CategoriesJson.categories)
        let Array2 = Array[0]
        console.log(this.state.subId);
        // console.log(Array[0]);
        return (
        
        <div>
          {Array2.map(e => this.state.subId.push(e.strCategory))}
          {Array2.map(e => 
          <SubCategoryTemplate
          key={e.idCategory}
          img={e.strCategoryThumb}
          
          />)}
          
        </div>
       ) 
    }
}
 
export default SubCaterogy;

