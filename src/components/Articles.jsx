import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";
import "../CSS/Articles.css"
import Article from "./Article"
import { useSearchParams, Link } from 'react-router-dom'; 
import FilterArticles from "./FilterArticles";

const Articles = () => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const topic = searchParams.get('topic');
    const topicCap = topic?.[0].toUpperCase() + topic?.slice(1);

    useEffect(() => {
        fetchArticles(searchParams).then((articlesObj) => {
            setArticles(articlesObj.articles);
            setLoading(false);
        })
        .catch((err) =>{
            console.log(err);
            setError(err);
            setLoading(false);
        })
    }, [searchParams])

    if (isLoading) {
        return <div className="loading" data-loading-text="Loading..."></div>
    }

    if (error) {
        return <p className="topic-error-message">404 - Topic Not Found</p>
    } 

    return (
        <section>
            {topicCap ? <h2>{topicCap} News</h2> : <h2>Latest News</h2>}
            <FilterArticles searchParams={searchParams} setSearchParams={setSearchParams}/>
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