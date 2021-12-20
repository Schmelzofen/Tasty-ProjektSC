import navLogo from "../../img/nav.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <section className="Header">
            <Link to="/"><img src={navLogo} alt="navLogo" /></Link>
            <h1>Find a recipe, an idea, an inspiration...</h1>
            <input type="text" placeholder="Type something to search" />
            <button>Search</button>
        </section>
    );
}

export default Header;