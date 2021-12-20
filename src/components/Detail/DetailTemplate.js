


const DetailTemplate = ({ name, picture, instructions, zutat1, zutat2, zutat3, zutat4, zutat5, zutat6, zutat7, zutat8, zutat9, zutat10, zutat11, zutat12, zutat13, zutat14, zutat15, mass1, mass2, mass3, mass4, mass5, mass6, mass7, mass8, mass9, mass10, mass11, mass12, mass13, mass14, mass15 }) => {
    return (
        <section className="DetailItem">
            <img src={picture} alt={name} />
            <article className="DetailLeft">
                <h2>{name}</h2>
                <p>{instructions}</p>
            </article>
            <article className="DetailRight">
                <h2>Ingredients</h2>
                <ul className="Ingredients">
                    <div>
                        <span>{mass1}</span>
                        <span>{zutat1}</span>
                    </div>
                    <div>
                        <span>{mass2}</span>
                        <span>{zutat2}</span>
                    </div>
                    <div>
                        <span>{mass3}</span>
                        <span>{zutat3}</span>
                    </div>
                    <div>
                        <span>{mass4}</span>
                        <span>{zutat4}</span>
                    </div>
                    <div>
                        <span>{mass5}</span>
                        <span>{zutat5}</span>
                    </div>
                    <div>
                        <span>{mass6}</span>
                        <span>{zutat6}</span>
                    </div>
                    <div>
                        <span>{mass7}</span>
                        <span>{zutat7}</span>
                    </div>
                    <div>
                        <span>{mass8}</span>
                        <span>{zutat8}</span>
                    </div>
                    <div>
                        <span>{mass9}</span>
                        <span>{zutat9}</span>
                    </div>
                    <div>
                        <span>{mass10}</span>
                        <span>{zutat10}</span>
                    </div>
                    <div>
                        <span>{mass11}</span>
                        <span>{zutat11}</span>
                    </div>
                    <div>
                        <span>{mass12}</span>
                        <span>{zutat12}</span>
                    </div>
                    <div>
                        <span>{mass13}</span>
                        <span>{zutat13}</span>
                    </div>
                    <div>
                        <span>{mass14}</span>
                        <span>{zutat14}</span>
                    </div>
                    <div>
                        <span>{mass15}</span>
                        <span>{zutat15}</span>
                    </div>
                </ul>
                <button className="button"><a href="">Watch on YouTube</a></button>
            </article>
        </section>
    );
}

export default DetailTemplate;