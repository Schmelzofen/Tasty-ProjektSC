import { Link } from "react-router-dom"

const SubCategoryTemplate = (props) => {
<<<<<<< HEAD
   
    
        return (
            <article className="SubCategoryItem">
                <p>SubCategory Item</p>
                
                <img src={props.img} alt="SubCatDescription" />
            </article>
        );
    

   


} 
=======
    return (
        <article className="SubCategoryItem">
            <p>{props.name}</p>
            <Link to="/">Sub Category</Link>
            <img src={props.picture} alt={props.picture} />
        </article>
    );
}

>>>>>>> 5bce225c6da97be274f91a593b5765046d550ffe
export default SubCategoryTemplate;