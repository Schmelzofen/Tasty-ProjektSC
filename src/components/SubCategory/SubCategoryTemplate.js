import { Link } from 'react-router-dom'
const SubCategoryTemplate = (props) => {
   
    
        return (
            <article className="SubCategoryItem">
                <p>SubCategory Item</p>
                <Link to={`/details/${props.id}`}>Details</Link>
                <img src={props.img} alt="SubCatDescription" />
            </article>
        );
    

   


} 
export default SubCategoryTemplate;