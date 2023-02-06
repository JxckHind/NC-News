import "../CSS/Article.css"

const Article = ({article}) => {

    const date = new Date(article.created_at).toLocaleDateString()

    return (
        <li className="article">
            <h3 id="article_title">{article.title}</h3>
            <p>{date}</p>
            <p>Author: {article.author}</p>
            <p>Topic: {(article.topic).toUpperCase()}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
            <img id="article_img" src={article.article_img_url} alt={article.title}/>
        </li>
    )
}

export default Article;