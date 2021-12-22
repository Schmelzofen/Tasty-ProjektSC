import React, { Component } from 'react';


class Random extends React.Component {
    state = {
        myArr: []
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(json => this.setState({ myArr: json.meals[0] }, () => {
                console.log(this.state.myArr)
            }))
    }

    render() {
        let data = this.state.myArr
        console.log(data)
        return (
            <section className="DetailItem">
                <img src={data.strMealThumb} alt={data.strMeal} />
                <section className="DetailFlex">
                    <article className="DetailLeft">
                        <h2>{data.strMeal}</h2>
                        <p>{data.strInstructions}</p>
                    </article>
                    <article className="DetailRight">
                        <h2>Ingredients</h2>
                        <ul className="Ingredients">
                            <div>
                                <span>{data.strMeasure1}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure2}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure3}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure4}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure5}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure6}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure7}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure8}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure9}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure10}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure11}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure12}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure13}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure14}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                            <div>
                                <span>{data.strMeasure15}</span>
                                <span>{data.strIngredient}</span>
                            </div>
                        </ul>
                        <button className="button"><a href={data.strYoutube}>Watch on YouTube</a></button>
                    </article>
                </section>
            </section >
        )
    }
}

export default Random;