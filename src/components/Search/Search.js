import Meals from "../../json/Meals.json"
import { v4 as uuidv4 } from 'uuid';
import SubCategoryTemplate from "../SubCategory/SubCategoryTemplate"
import { useParams } from 'react-router-dom';

var searchedData = []
function generateData(searchWord,array){
    searchedData = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i].strMeal.toLowerCase()).includes(searchWord)) {
            searchedData.push(array[i]);
        }
    }
}

const Search = () => {
    let {query} = useParams()
    generateData(query,Meals.meals)
    console.log(searchedData)
    return ( <div className="Search">
        {searchedData.map(i => <SubCategoryTemplate
            key={uuidv4()}
            id={i.idMeal}
            name={i.strMeal}
            picture={i.strMealThumb}
        /> )}
    </div> );
}
 
export default Search;
