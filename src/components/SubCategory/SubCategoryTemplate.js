import { Link } from "react-router-dom"

const SubCategoryTemplate = (props) => {
<<<<<<< HEAD
   
    
        return (
            <article className="SubCategoryItem">
                <p>{props.title}</p>
                <Link to={`/SubCategory/${props.title}`}>Details</Link>
                <img src={props.src} alt="SubCatDescription" />
            </article>
        );
    

   


} 
export default SubCategoryTemplate;


// import { Link } from 'react-router-dom'
// const SubCategoryTemplate = (props) => {
   
    
//         return (
//             <article className="SubCategoryItem">
//                 <p>SubCategory Item</p>
//                 <Link to={`/details/${props.id}`}>Details</Link>
//                 <img src={props.img} alt="SubCatDescription" />
//             </article>
//         );
    

   


// } 
// export default SubCategoryTemplate;
=======
    return (
        <article className="SubCategoryItem">
            <Link className="link" to={`/details/${props.id}`}>
                <p>{props.name}</p>
                <img src={props.picture} alt={props.name} />
            </Link>
        </article>
    );
}

export default SubCategoryTemplate;
>>>>>>> main
