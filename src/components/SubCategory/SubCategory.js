import SubCategory from "./SubCategoryTemplate";
import React, { Component } from 'react';

class SubCategori extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subData:[],subId:[],
          }
    }

    componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(json => this.setState({subId:json}))
        console.log(this.state.subId);
    }


   
    
    render() { 
        return (
        <div>

        </div>  );
    }
}
 
export default SubCategori;