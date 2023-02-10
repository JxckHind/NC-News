import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils";
import "../CSS/DeleteComment.css";

const DeleteComment = ({comment, setComments, setCommentDeleted}) => {

    const {loggedInUser} = useContext(UserContext);

    const handleDelete = (commentIDToDelete) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            setComments((currComments) => {
                const comments = [...currComments];
                comments.forEach((comment) => {
                    if (comment.comment_id === commentIDToDelete) {
                        const commentIndex = comments.indexOf(comment);
                        comments.splice(commentIndex, 1);
                    } 
                })
                return comments;
            })
            deleteComment(commentIDToDelete);
            setCommentDeleted(true);
        }
    }

    return (
        <section className="delete-comment">
            {loggedInUser.username === comment?.author ? <button onClick={() => handleDelete(comment.comment_id)}>DELETE</button> : null}
        </section>
    )
}

export default DeleteComment;