import CategoryTemplate from "./CategoryTemplate"
import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [],
            val: "",
        }
    }


    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json => this.setState({ myArr: json.categories }, () => {
                console.log(this.state.myArr)
            }))
    }
    render() {
        return (
            <section className="Category">
                <h1>Or go through our categories</h1>
                <article className="CategoryGridContainer">
                    {this.state.myArr.map(item => <CategoryTemplate
                        id={item.idCategory}
                        key={item.idCategory}
                        name={item.strCategory}
                        picture={item.strCategoryThumb}
                    />)}
                    <section className="CategoryItem RandomBox">
                        <Link className="link" to="/random">Random</Link>
                    </section>
                </article>
            </section>
        )
    }
}

export default Category;