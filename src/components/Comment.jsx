import DeleteComment from "./DeleteComment"
import "../CSS/Comment.css"

const Comment = ({comment, setComments, setCommentDeleted}) => {

    const date = new Date(comment.created_at).toLocaleDateString()
    
    return (
        <li className="comment">
            <p className="comment-body">{comment.body}</p>
            <p className="comment-info">Author: {comment.author}</p>
            <p className="comment-info">Date: {date}</p>
            <DeleteComment comment={comment} setComments={setComments} setCommentDeleted={setCommentDeleted}/>
        </li>
    )
}

export default Comment;