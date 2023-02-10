import "../CSS/Header.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    const navigate = useNavigate();
    
    const handleLogOut = () => {
        setLoggedInUser({})
        navigate("/login")
    }

    const handleLogIn = () => {
        navigate("/login")
    }

    return (
        <section className="header">
            <h1>NC News</h1>
            {!loggedInUser.username && <button onClick={handleLogIn}>Log In</button>}
            {loggedInUser.username && <button onClick={handleLogOut}>Log Out</button>}
            {loggedInUser.avatar_url && <img className="avatar-img" src={loggedInUser.avatar_url} alt="user"></img>}
            {loggedInUser.name && <p>Hello {loggedInUser.name}!</p>}
        </section>
    )
}  

export default Header;