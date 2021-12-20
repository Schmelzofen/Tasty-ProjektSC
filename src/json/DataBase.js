import React from 'react';

var Api;
class ApiData extends React.Component {
    state = {
        dataUrl: 'www.themealdb.com/api/json/v1/1/categories.php',
        dataBase: []
    }

    componentDidMount() {
        fetch(this.state.dataUrl)
            .then(res => res.json())
            .then(data => this.setState({ dataBase: data }))
            .catch(err => console.error(err));
    }
    componentDidUpdate() {
        Api = this.state.dataBase
    }
    render() {
        return (<div className="All">
        </div>);
    }
}


export { Api };
export default ApiData;

