import { useState } from "react";
import { postComment } from "../utils";
import "../CSS/AddComment.css"

const AddComment = ({article_id, setComments}) => {

    const [newComment, setNewComment] = useState("");
    const [commentPosted, setCommentPosted] = useState(false);

    const handleNewComment = (e) => {
        e.preventDefault();
        postComment(article_id, newComment).then(({comment}) => {
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