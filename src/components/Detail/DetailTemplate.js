import { useParams } from "react-router-dom";
import { Component } from "react"
// Details URL :
// last element is ID
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772




class DetailTemplate extends Component {
    state = {
        DetailData: []
    }
    componentDidMount() {
        let { id } = useParams()
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(json => this.setState({ DetailData: json }))
    }

    render() {

        let data = this.state.DetailData.filter(i => i.data === id)
        return (
            <section className="DetailItem">
                <img src={data.strMealThumb} alt="DetailDescription" />
                <article className="DetailLeft">
                    <h2>{data.strMeal}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur similique tempora ex a, quod adipisci autem dolor excepturi et enim. Impedit nisi odio aperiam architecto cumque aspernatur, velit voluptas accusantium, dolore repellendus recusandae earum quod reprehenderit cupiditate libero eius assumenda consequuntur! Facere doloremque autem magni mollitia ut commodi dolorum omnis rem voluptates perferendis exercitationem asperiores accusantium consectetur, maiores quia veniam architecto nisi! Temporibus quae voluptatibus beatae natus, est quo aut vero, odio nobis doloribus molestiae, alias voluptas molestias magni tenetur sed impedit dolore quis ipsum perferendis fugit culpa. Ratione soluta maxime dolor, aut iure voluptatem reiciendis nulla dicta cupiditate.</p>
                </article>
                <article className="DetailRight">
                    <h2>Ingredients</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita officiis nobis perferendis facere velit cupiditate dicta? Doloremque, saepe labore! Unde sunt dignissimos ab voluptas, ex at asperiores? Saepe tenetur, ab earum tempore eligendi magnam qui amet repudiandae laboriosam culpa similique maiores nam itaque quo labore,</p>
                    <a href={data.strYoutube} >Watch on YouTube</a>
                </article>
            </section>
        );
    }
}

export default DetailTemplate;

{/* <section className="DetailItem">
<img src="DetailPicture" alt="DetailDescription" />
<article className="DetailLeft">
    <h2>Beef and Mustard Pie</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur similique tempora ex a, quod adipisci autem dolor excepturi et enim. Impedit nisi odio aperiam architecto cumque aspernatur, velit voluptas accusantium, dolore repellendus recusandae earum quod reprehenderit cupiditate libero eius assumenda consequuntur! Facere doloremque autem magni mollitia ut commodi dolorum omnis rem voluptates perferendis exercitationem asperiores accusantium consectetur, maiores quia veniam architecto nisi! Temporibus quae voluptatibus beatae natus, est quo aut vero, odio nobis doloribus molestiae, alias voluptas molestias magni tenetur sed impedit dolore quis ipsum perferendis fugit culpa. Ratione soluta maxime dolor, aut iure voluptatem reiciendis nulla dicta cupiditate.</p>
</article>
<article className="DetailRight">
    <h2>Ingredients</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita officiis nobis perferendis facere velit cupiditate dicta? Doloremque, saepe labore! Unde sunt dignissimos ab voluptas, ex at asperiores? Saepe tenetur, ab earum tempore eligendi magnam qui amet repudiandae laboriosam culpa similique maiores nam itaque quo labore,</p>
    <button>Watch on YouTube</button>
</article>
</section> */}