import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";
import "../CSS/Articles.css"
import Article from "./Article"
import { useLocation, Link } from 'react-router-dom'; 

const Articles = () => {

    const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const {search} = useLocation();

    const topic = search.match(/=(.*)/)?.[1];
    const topicCap = topic?.[0].toUpperCase() + topic?.slice(1);

    useEffect(() => {
        fetchArticles(search).then((articlesObj) => {
            setArticles(articlesObj.articles);
            setLoading(false);
        })
    }, [search])

    if (isLoading) {
        return <p className="articles-loading">Loading...</p>
    }

    return (
        <section>
            {topicCap ? <h2>{topicCap} News</h2> : <h2>Latest News</h2>}
            <ul>
                {articles.map((article) => {
                    return (
                    <Link className="article-link" to={`/articles/${article.article_id}`} key={article.article_id}>
                    <Article article={article}/>
                    </Link>
                )})}
            </ul>
        </section>
    )
}

export default Articles;