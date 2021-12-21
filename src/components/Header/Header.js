import navLogo from "../../img/nav.png"
import categories from "../../json/categories.json"
import {useState} from "react"
const Header = () => {
    const[query,setQuery] = useState("")
    return (
        <section className="Header">
            <img src={navLogo} alt="navLogo" />
            <h1>Find a recipe, an idea, an inspiration...</h1>
            <input type="text" placeholder="Type something to search" onChange={event => setQuery(event.target.value)} />
            <button>Search</button>
           
        </section>
       
       
    );
}

export default Header;