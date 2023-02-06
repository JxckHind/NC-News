import "../CSS/Article.css"

const Article = ({article}) => {

    const date = new Date(article.created_at).toLocaleDateString()

    return (
        <section className="article">
            <h3 id="title">{article.title}</h3>
            <h4 id="date">{date}</h4>
            <h4 id="author">Author - {article.author}</h4>
            <h4 id="topic">Topic - <span>{article.topic}</span></h4>
            <h4 id="votes">Votes - {article.votes}</h4>
            <h4 id="comments">Comments - {article.comment_count}</h4>
            <img id="img" src={article.article_img_url} alt={article.title}/>
        </section>
    )
}

export default Article;