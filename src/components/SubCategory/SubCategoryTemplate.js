import { Link } from 'react-router-dom'
const SubCategoryTemplate = (props) => {
   
    
        return (
            <article className="SubCategoryItem">
                <p>SubCategory Item</p>
                
                <img src={props.img} alt="SubCatDescription" />
            </article>
        );
    

   


} 
export default SubCategoryTemplate;