import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";
import "../CSS/Articles.css"
import Article from "./Article"

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
                    return <Article className="article" key={article.article_id} article={article}/>
                })}
            </ul>
        </section>
    )
}

export default Articles;