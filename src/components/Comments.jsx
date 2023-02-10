import { useEffect, useState } from "react";
import { fetchComments } from "../utils";
import AddComment from "./AddComment";
import Comment from "./Comment";
import "../CSS/Comments.css";

const Comments = ({article_id}) => {

    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [commentDeleted, setCommentDeleted] = useState(false);

    useEffect(() => {
        fetchComments(article_id).then((commentsObj) => {
            setComments(commentsObj.comments);
            setLoading(false);
        })
    }, [article_id])

    if (isLoading) {
        return <p className="comments-loading">Loading...</p>
    }

    return (
        <section className="article-comments">
            <h3 className="comments-title">Comments:</h3>
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