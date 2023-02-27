import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticle, fetchComments } from '../utils';
import "../CSS/SingleArticle.css"
import Comments from './Comments';
import Votes from './Votes';

const SingleArticle = () => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([]);
    const {article_id} = useParams();
    const date = new Date(article.created_at).toLocaleDateString()

    useEffect(() => {
        Promise.all([fetchArticle(article_id), fetchComments(article_id)]).then((data) => {
            setArticle(data[0].article);
            setComments(data[1].comments);
            setLoading(false);
        })
        .catch((err) =>{
            console.log(err);
            setError(err);
            setLoading(false);
        })
    }, [article_id])

    if (isLoading) {
        return <div className="loading" data-loading-text="Loading..."></div>
    }

    if (error) {
        return <p className="article-error-message">404 - Article Not Found</p>
    } 

    return (
        <section className="single-article-grid">
            <h2 id="single-article-title">{article.title}</h2>
            <p id="single-article-date">{date}</p>
            <p id="single-article-topic">Topic: {(article.topic)?.toUpperCase()}</p>
            <img id="single-article-img" src={article.article_img_url} alt={article.title}/>
            <p id="single-article-author">Author: {article.author}</p>
            <Votes article={article} setArticle={setArticle}/>
            <p id="single-article-body">{article.body}</p>
            <Comments article_id={article_id} comments={comments} setComments={setComments}/>
        </section>
    )
}

export default SingleArticle;