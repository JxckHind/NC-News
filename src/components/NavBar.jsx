import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';
import { useContext } from "react";
import { TopicOnClickContext } from "../contexts/TopicOnClickContext";

const NavBar = () => {

    const {setNavTopicOnClick} = useContext(TopicOnClickContext);

    return (
        <section>
            <ul className='navbar'>
                <li>
                    <Link className="nav" to="/articles" onClick={() => setNavTopicOnClick(undefined)}>Home</Link>   
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=coding" onClick={() => setNavTopicOnClick("coding")}>Coding</Link>
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=football" onClick={() => setNavTopicOnClick("football")}>Football</Link>
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=cooking" onClick={() => setNavTopicOnClick("cooking")}>Cooking</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavBar;