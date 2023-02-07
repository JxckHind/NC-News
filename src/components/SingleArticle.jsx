import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../utils';
import "../CSS/SingleArticle.css"
import Comments from './Comments';

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
        <section className="single_article_grid">
            <h2 id="single_article_title">{article.title}</h2>
            <p id="single_article_date">{date}</p>
            <p id="single_article_topic">Topic: {(article.topic)?.toUpperCase()}</p>
            <img id="single_article_img" src={article.article_img_url} alt={article.title}/>
            <p id="single_article_author">Author: {article.author}</p>
            <Comments article_id={article_id}/>
        </section>
    )
}

export default SingleArticle;