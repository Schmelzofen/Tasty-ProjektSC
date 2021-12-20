<<<<<<< HEAD
import {Link} from "react-router-dom"
import CategoriesJson from '../../json/categories.json'


const CategoryTemplate = (props) => {

    return (
        <Link to={`/SubCategory/${props.id}`} >
            <article className="CategoryItem">
            <p>{props.title}</p>
            <img src={props.src} alt="categoryDescription" />
=======
import { Link } from "react-router-dom"

const CategoryTemplate = (props) => {
    return (
        <article className="CategoryItem">
            <Link className="link" to={`/category/${props.name}`}>
                <p>{props.name}</p>
                <img src={props.picture} alt={props.name} />
            </Link>
>>>>>>> main
        </article>
        </Link>
    );
}

export default CategoryTemplate;

