import { strIngredient } from "./Detail";
import { strMeasure } from "./Detail";
import { strDesc } from "./Detail";


const DetailTemplate = ({ youtube, name, picture, instructions, zutat, zutat1, zutat2, zutat3, zutat4, zutat5, zutat6, zutat7, zutat8, zutat9, zutat10, zutat11, zutat12, zutat13, zutat14, zutat15, mass1, mass2, mass3, mass4, mass5, mass6, mass7, mass8, mass9, mass10, mass11, mass12, mass13, mass14, mass15 }) => {

    return (

        < section className="DetailItem" >
            <img src={picture} alt={name} />
            <section className="DetailFlex">
                <article className="DetailLeft">

                    <ul>
                        {strDesc.map(e =>

                            <li>{e}</li>

                        )}
                    </ul>
                </article>
                <article className="DetailRight">
                    <h2>Ingredients</h2>
                    <ul className="Ingredients">

                        <div className="strIngredient">
                            {strIngredient.map(e =>
                                <li>{e}</li>

                            )}
                        </div>
                    </ul>

                    <ul className="Measure">
                        <div className="strMeasure">
                            {strMeasure.map(e =>
                                <p>{e}</p>

                            )}
                        </div>
                    </ul>
                    <button className="button"><a href={youtube}>Watch on YouTube</a></button>
                </article>
            </section>
        </section >
    );
}

export default DetailTemplate;