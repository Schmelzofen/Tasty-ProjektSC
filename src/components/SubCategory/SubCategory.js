import SubCategoryTemplate from "./SubCategoryTemplate";
import React, { Component } from 'react';



class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subData: [],
        }
    }

    componentDidMount() {
        fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.id}`)
            .then(response => response.json())
            .then(json => this.setState({ subData: json }, () => {
                console.log(this.state.subData)
            }))
    }

    render() {
        console.log(this.state.subData)
        return (
            <section className="SubCategory">
                <h1>Everything Beef</h1>
                <article className="SubCategoryGridContainer">

                </article>
            </section>);
    }
}

export default SubCategory;