import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link className="nav" to="/articles">Home</Link>
            <Link className="nav" to="/articles?topic=coding">Coding</Link>
            <Link className="nav" to="/articles?topic=football">Football</Link>
            <Link className="nav" to="/articles?topic=cooking">Cooking</Link>
        </nav>
    )
}

export default NavBar;