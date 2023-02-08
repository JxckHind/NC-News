import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
        <section>
            <ul className='navbar'>
                <li>
                    <Link className="nav" to="/articles" reloadDocument>Home</Link>   
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=coding" reloadDocument>Coding</Link>
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=football" reloadDocument>Football</Link>
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=cooking" reloadDocument>Cooking</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavBar;