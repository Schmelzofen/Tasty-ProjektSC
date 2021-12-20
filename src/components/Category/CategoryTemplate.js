
const CategoryTemplate = (props) => {
    return (
        <article className="CategoryItem">
            <p>{props.name}</p>
            <img src={props.picture} alt={props.name} />
        </article>
    );
}

export default CategoryTemplate;