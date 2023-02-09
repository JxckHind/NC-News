import { useState } from "react";
import { postComment } from "../utils";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../CSS/AddComment.css"

const AddComment = ({article_id, setComments}) => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    const [newComment, setNewComment] = useState("");
    const [commentPosted, setCommentPosted] = useState(false);

    const handleNewComment = (e) => {
        e.preventDefault();
        postComment(article_id, newComment, loggedInUser.username).then(({comment}) => {
            setComments((currComments) => {
                return [comment, ...currComments];
            })
            setCommentPosted(true)
        })
    }

    return (
        <section className="post-comment">
            <form onSubmit={handleNewComment} className="post-comment-form">
                <label htmlFor="new-comment">Add Comment:</label>
                <textarea
                    id="new-comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}>
                </textarea>
                <button>POST</button>
            </form>
            {commentPosted ? <p>Comment Posted!</p> : null}
        </section>
    )
}

export default AddComment;