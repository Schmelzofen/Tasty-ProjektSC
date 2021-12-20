import navLogo from "../../img/nav.png"

const Header = () => {
    return (
        <section className="Header">
            <img src={navLogo} alt="navLogo" />
            <h1>Find a recipe, an idea, an inspiration...</h1>
            <input type="text" />
            <button>Search</button>
        </section>
    );
}

export default Header;