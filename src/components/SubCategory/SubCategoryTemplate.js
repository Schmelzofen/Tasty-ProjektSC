import { Link } from "react-router-dom"

const SubCategoryTemplate = (props) => {
    return (
        <article className="SubCategoryItem">
            <p>SubCategory Item</p>
            <Link to="/">Sub Category</Link>
            <img src="SubCatPicture" alt="SubCatDescription" />
        </article>
    );
}

export default SubCategoryTemplate;


// const SubCategoryTemplate = (props) => {
//     return (
//         <article className="SubCategoryItem">
//             <p>{props.name}</p>
//             <img src={props.src} alt="SubCatDescription" />
//         </article>
//     );
// }

// export default SubCategoryTemplate;
