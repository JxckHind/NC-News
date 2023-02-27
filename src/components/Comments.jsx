import {useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import "../CSS/Comments.css";

const Comments = ({article_id, comments, setComments}) => {

    const [commentDeleted, setCommentDeleted] = useState(false);

    return (
        <section className="article-comments">
            <h3 className="comments-title">Comments</h3>
            <AddComment article_id={article_id} setComments={setComments} commentDeleted={commentDeleted} setCommentDeleted={setCommentDeleted}/>
            <ul>
                {comments?.map((comment) => {
                    return <Comment key={comment.comment_id} comment={comment} setComments={setComments} setCommentDeleted={setCommentDeleted}/>
                })}
            </ul>
        </section>
    )
}

export default Comments;