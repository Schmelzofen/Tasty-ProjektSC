import { Link } from "react-router-dom"

const SubCategoryTemplate = (props) => {
    return (
        <article className="SubCategoryItem">
            <p>{props.name}</p>
            <Link to={`/details/${props.id}`}>Sub Category</Link>
            <img src={props.picture} alt={props.name} />
        </article>
    );
}

export default SubCategoryTemplate;