import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchUsers } from "../utils";
import { useNavigate } from "react-router-dom";
import "../CSS/LogIn.css"

const LogIn = () => {
    
    const {setLoggedInUser} = useContext(UserContext);

    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers().then((usersObj) => {
            setUsers(usersObj.users);
            setLoading(false);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            users.forEach((user) => {
                if (user.username === username) {
                    setLoggedInUser(user);
                }
            })
            navigate("/articles");
        }
    }

    if (isLoading) {
        return <p className="users-loading">Loading...</p>
    }

    return (
        <section className="user-login">
            <h3>Please Log In</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="select-user">User: </label>
                <select id="select-user" defaultValue="BLANK" onChange={(e) => setUsername(e.target.value)}>
                    <option value="BLANK" disabled>Select User</option>
                    {users.map((user) => {
                        return <option key={user.username} value={user.username}>{user.name}</option>
                    })}
                </select>
                <button>Log In</button>
            </form>
        </section>
    )
}

export default LogIn;