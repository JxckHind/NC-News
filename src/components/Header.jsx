import "../CSS/Header.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <section className="header">
            <h1>NC News</h1>
            <img src={loggedInUser.avatar_url} alt="user avatar"/>
            <p>Hello {loggedInUser.name}!</p>
        </section>
    )
}  

export default Header;