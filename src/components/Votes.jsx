import { useState } from "react"
import { patchArticle } from "../utils"
import "../CSS/Votes.css"

const Votes = ({article, setArticle}) => {

    const [isOffline, setIsOffline] = useState(false);
    
    const handleLike = () => {
        setArticle((currArticle) => {
            return {...currArticle, votes: currArticle.votes + 1};
        })
        const body = {
            "inc_votes": 1
        }
        setIsOffline(false);
        patchArticle(article.article_id, body).catch((err) => {
            console.log(err);
            setArticle((currArticle) => {
                return {...currArticle, votes: currArticle.votes - 1};
            })
            setIsOffline(true);
        })
    }

    const handleDislike = () => {
        setArticle((currArticle) => {
            return {...currArticle, votes: currArticle.votes - 1};
        })
        const body = {
            "inc_votes": -1
        }
        setIsOffline(false);
        patchArticle(article.article_id, body).catch((err) => {
            console.log(err);
            setArticle((currArticle) => {
                return {...currArticle, votes: currArticle.votes + 1};
            })
            setIsOffline(true); 
        })
    }
    
    return (
        <section className="votes">
            <button onClick={handleLike}>Like 👍🏻</button>
            <p>{article.votes}</p>
            <button onClick={handleDislike}>Dislike 👎🏻</button>
            {isOffline ? <p>Network Offline</p> : null}
        </section>
    )
}

export default Votes;