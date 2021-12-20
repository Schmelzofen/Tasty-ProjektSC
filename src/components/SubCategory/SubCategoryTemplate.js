import { Link } from "react-router-dom"

const SubCategoryTemplate = (props) => {
    return (
        <article className="SubCategoryItem">
            <p>{props.name}</p>
            <Link to="/">Sub Category</Link>
            <img src={props.picture} alt={props.picture} />
        </article>
    );
}

export default SubCategoryTemplate;