import {Link} from "react-router-dom"
import CategoriesJson from '../../json/categories.json'

const CategoryTemplate = (props) => {

    return (
        <Link to={`/SubCategory/${props.idCategory}`} >
            <article className="CategoryItem">
            <p>{props.title}</p>
            <img src={props.src} alt="categoryDescription" />
        </article>
        </Link>
    );
}

export default CategoryTemplate;

