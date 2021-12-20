import SubCategoryTemplate from "./SubCategoryTemplate";
import React, { Component } from 'react';



class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subData: [], subId: [],
        }
    }

    componentDidMount() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => response.json())
            .then(json => this.setState({ subId: json }))
        console.log(this.state.subId);
    }




    render() {
        return (
            <section className="SubCategory">
                <h1>Everything Beef</h1>
                <article className="SubCategoryGridContainer">

                </article>
            </section>);
    }
}

export default SubCategory;