import DetailTemplate from "./DetailTemplate"
import React, { Component } from 'react';


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subData: [],
        }
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.id}`)
            .then(response => response.json())
            .then(json => this.setState({ subData: json.meals }))
    }

    render() {
        console.log(this.state.subData)
        return (
            <div>
                {this.state.subData.map(i => <DetailTemplate
                    key={i}
                    name={i.strMeal}
                    picture={i.strMealThumb}
                    instructions={i.strInstructions}
                    mass1={i.strMeasure1}
                    mass2={i.strMeasure2}
                    mass3={i.strMeasure3}
                    mass4={i.strMeasure4}
                    mass5={i.strMeasure5}
                    mass6={i.strMeasure6}
                    mass7={i.strMeasure7}
                    mass8={i.strMeasure8}
                    mass9={i.strMeasure9}
                    mass10={i.strMeasure10}
                    mass11={i.strMeasure11}
                    mass12={i.strMeasure12}
                    mass13={i.strMeasure13}
                    mass14={i.strMeasure14}
                    mass15={i.strMeasure15}
                    zutat1={i.strIngredient1}
                    zutat2={i.strIngredient2}
                    zutat3={i.strIngredient3}
                    zutat4={i.strIngredient4}
                    zutat5={i.strIngredient5}
                    zutat6={i.strIngredient6}
                    zutat7={i.strIngredient7}
                    zutat8={i.strIngredient8}
                    zutat9={i.strIngredient9}
                    zutat10={i.strIngredient10}
                    zutat11={i.strIngredient11}
                    zutat12={i.strIngredient12}
                    zutat13={i.strIngredient13}
                    zutat14={i.strIngredient14}
                    zutat15={i.strIngredient15}
                />)}
            </div>
        )
    }
}

export default Detail;