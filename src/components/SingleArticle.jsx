import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../utils';
import "../CSS/SingleArticle.css"
import Comments from './Comments';
import Votes from './Votes';

const SingleArticle = () => {

    const [isLoading, setLoading] = useState(true);
    const [article, setArticle] = useState({})
    const {article_id} = useParams();
    const date = new Date(article.created_at).toLocaleDateString()

    useEffect(() => {
        fetchArticle(article_id).then((articleObj) => {
            setArticle(articleObj.article);
            setLoading(false);
        })
    }, [article_id])

    if (isLoading) {
        return <p className="article-loading">Loading...</p>
    }

    return (
        <section className="single-article-grid">
            <h2 id="single-article-title">{article.title}</h2>
            <p id="single-article-date">{date}</p>
            <p id="single-article-topic">Topic: {(article.topic)?.toUpperCase()}</p>
            <img id="single-article-img" src={article.article_img_url} alt={article.title}/>
            <p id="single-article-author">Author: {article.author}</p>
            <Votes article={article} setArticle={setArticle}/>
            <Comments article_id={article_id}/>
        </section>
    )
}

export default SingleArticle;