import { useState } from "react";
import { postComment } from "../utils";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../CSS/AddComment.css"

const AddComment = ({article_id, setComments, commentDeleted, setCommentDeleted}) => {

    const {loggedInUser} = useContext(UserContext);

    const [newComment, setNewComment] = useState("");
    const [commentPosted, setCommentPosted] = useState(false);
    const [isPosting, setIsPosting] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    const handleNewComment = (e) => {
        e.preventDefault();
        if (!isEmpty) {
            setIsPosting(true);
            postComment(article_id, newComment, loggedInUser.username).then(({comment}) => {
                setComments((currComments) => {
                    return [comment, ...currComments];
                })
                setNewComment("");
                setCommentPosted(true);
                setIsPosting(false);
                setIsEmpty(true);
            })
        }
    }

    const onChange = (commentValue) => {
        setNewComment(commentValue);
        setCommentPosted(false);
        setCommentDeleted(false);
        if (commentValue.match(/[^\s*]/g)) {
            setIsEmpty(false);
        }
    }
    
    if (isPosting) {
        return <p className="comment-posting">Posting...</p>
    }

    if (!loggedInUser.username) {
        return <p className="check-loggedin">Please Log In To Place A Comment</p>
    }

    return (
        <section className="post-comment">
            <form onSubmit={handleNewComment} className="post-comment-form">
                <label htmlFor="new-comment">Add Comment:</label>
                <textarea
                    id="new-comment"
                    value={newComment}
                    onChange={(e) => onChange(e.target.value)}>
                </textarea>
                <button>POST</button>
            </form>
            {commentPosted && !commentDeleted? <p>Comment Posted!</p> : null}
            {commentDeleted ? <p>Comment Deleted!</p> : null}
        </section>
    )
}

export default AddComment;