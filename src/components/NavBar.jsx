import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
        <section>
            <ul className='navbar'>
                <li>
                    <Link className="nav" to="/articles">Home</Link>   
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=coding">Coding</Link>
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=football">Football</Link>
                </li>
                <li>
                    <Link className="nav" to="/articles?topic=cooking">Cooking</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavBar;