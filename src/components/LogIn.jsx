import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const LogIn = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    useEffect(() => {
        setLoggedInUser({
            "username": "cooljmessy",
            "name": "Peter Messy",
            "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002"
        })
    }, [])
}

export default LogIn;