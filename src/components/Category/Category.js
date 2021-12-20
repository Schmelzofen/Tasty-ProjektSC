import CategoryTemplate from "./CategoryTemplate"
import React, { Component } from 'react';


class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [],
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
                        name={item.strCategory}
                        picture={item.strCategoryThumb}
                    />)}
                </article>
            </section>
        )
    }
}

export default Category;