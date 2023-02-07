import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";
import "../CSS/Articles.css"
import Article from "./Article"
import { Link } from 'react-router-dom'; 

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then((articlesObj) => {
            setArticles(articlesObj.articles);
        })
    }, [])

    return (
        <section>
            <h2>Latest Stories</h2>
            <ul>
                {articles.map((article) => {
                    return (
                    <Link className="article-link" to={`/articles/${article.article_id}`} key={article.article_id}>
                    <Article className="article" article={article}/>
                    </Link>
                )})}
            </ul>
        </section>
    )
}

export default Articles;