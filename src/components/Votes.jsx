import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext";
import { patchArticle } from "../utils"
import "../CSS/Votes.css"

const Votes = ({article, setArticle}) => {

    const {loggedInUser} = useContext(UserContext);

    const [isOffline, setIsOffline] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    
    const handleLike = () => {
        if (!isLiked && !isDisliked) {
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
            setIsLiked(true);
        } else if (!isLiked && isDisliked) {
            setArticle((currArticle) => {
                return {...currArticle, votes: currArticle.votes + 2};
            })
            const body = {
                "inc_votes": +2
            }
            setIsOffline(false);
            patchArticle(article.article_id, body).catch((err) => {
                console.log(err);
                setArticle((currArticle) => {
                    return {...currArticle, votes: currArticle.votes - 2};
                })
                setIsOffline(true); 
            })
            setIsLiked(true);
            setIsDisliked(false);
        }
    }

    const handleDislike = () => {
        if (!isDisliked && !isLiked) {
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
            setIsDisliked(true);
        } else if (!isDisliked && isLiked) {
            setArticle((currArticle) => {
                return {...currArticle, votes: currArticle.votes - 2};
            })
            const body = {
                "inc_votes": -2
            }
            setIsOffline(false);
            patchArticle(article.article_id, body).catch((err) => {
                console.log(err);
                setArticle((currArticle) => {
                    return {...currArticle, votes: currArticle.votes + 2};
                })
                setIsOffline(true); 
            })
            setIsDisliked(true);
            setIsLiked(false);
        }
    }
    
    if (!loggedInUser.username) {
        return <p className="votes-no-loggin">Votes: {article.votes}</p>;
    }
     
    return (
        <section className="single-article-votes">
            <button onClick={handleLike}>Like 👍🏻</button>
            <p>{article.votes}</p>
            <button className="dislike" onClick={handleDislike}>Dislike 👎🏻</button>
            {isOffline ? <p>Network Offline</p> : null}
        </section>
    )
}

export default Votes;