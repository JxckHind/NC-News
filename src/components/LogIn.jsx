import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchUsers } from "../utils";
import { useNavigate } from "react-router-dom";
import "../CSS/LogIn.css"
import Modal from 'react-bootstrap/Modal';

const LogIn = () => {
    
    const {setLoggedInUser} = useContext(UserContext);
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState(null);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);

    useEffect(() => {
        setTimeout(() => {
          setShow(true)
        }, 2000)
      }, [])

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
        return (
            <section>
                <div className="loading" data-loading-text="Loading..."></div>
                <Modal className="modal" show={show} onHide={handleClose} backdrop="static">
                    <h3 className="modal-header">Warning!</h3>
                    <p className="modal-body">The backend of this project is hosted with a free provider and so may take some time to load if the website hasn't been used in a while.
                    </p>
                    <button className="modal-button" variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal>
            </section>
        )
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

// split pop up into its own component and import the bootstrap styling there
// alternatively, style pop up myself and remove bootstrap modal
// figure out how to blur background when pop up shows

export default LogIn;