import {Link} from 'react-router-dom'
const SubCategoryTemplate = () => {
    return (
        <article className="SubCategoryItem">
            <p>SubCategory Item</p>
            <Link to="/">Sub Category</Link>
            <img src="SubCatPicture" alt="SubCatDescription" />
        </article>
    );
}

export default SubCategoryTemplate;

