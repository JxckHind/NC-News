import { useEffect, useState } from "react";
import { fetchComments } from "../utils";
import Comment from "./Comment";

const Comments = ({article_id}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments(article_id).then((commentsObj) => {
            setComments(commentsObj.comments);
        })
    }, [article_id])

    console.log(comments);

    return (
        <section>
            <h3>Comments:</h3>
            <ul>
                {comments.map((comment) => {
                    return <Comment key={comment.comment_id} comment={comment}/>
                })}
            </ul>
        </section>
    )
}

export default Comments;