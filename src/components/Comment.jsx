import "../CSS/Comment.css"

const Comment = ({comment}) => {

    const date = new Date(comment.created_at).toLocaleDateString()
    
    return (
        <li className="comment">
            <p className="comment-body">{comment.body}</p>
            <p className="comment-info">Author: {comment.author}</p>
            <p className="comment-info">Date: {date}</p>
        </li>
    )
}

export default Comment;