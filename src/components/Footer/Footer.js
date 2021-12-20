import { Link } from "react-router-dom"
import fb from "../../img/face.png"
import yt from "../../img/youtube.png"
import insta from "../../img/insta.png"

const Footer = () => {
    return (
        <section className="Footer">
            <img src={insta} alt="insta" />
            <img src={yt} alt="yt" />
            <img src={fb} alt="fb" />
        </section>
    );
}

export default Footer;