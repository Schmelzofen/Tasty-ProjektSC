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
                    name={i.strMeal}
                />)}
            </div>
        )
    }
}

export default Detail;