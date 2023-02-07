import "../CSS/Comment.css"

const Comment = ({comment}) => {

    const date = new Date(comment.created_at).toLocaleDateString()
    
    return (
        <li className="comment">
            <p className="comment-body">{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Date: {date}</p>
        </li>
    )
}

export default Comment;