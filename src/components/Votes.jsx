import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext";
import { patchArticle } from "../utils"
import "../CSS/Votes.css"

const Votes = ({article}) => {

    const {loggedInUser} = useContext(UserContext);

    const [isOffline, setIsOffline] = useState(false);
    const [voteChange, setVoteChange] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    
    const handleLike = () => {
        if (!isLiked && !isDisliked) {
            setVoteChange(voteChange + 1);
            setIsOffline(false);
            patchArticle(article.article_id, 1).catch((err) => {
                console.log(err);
                setVoteChange(0);
                setIsOffline(true);
            })
            document.getElementById("like").style.backgroundColor = "green";
            document.getElementById("like").style.color = "white";
            setIsLiked(true);
        } else if (isLiked && !isDisliked){
            setVoteChange(voteChange - 1);
            setIsOffline(false);
            patchArticle(article.article_id, -1).catch((err) => {
                console.log(err);
                setVoteChange(0);
                setIsOffline(true);
            })
            document.getElementById("like").style.backgroundColor = null;
            document.getElementById("like").style.color = null;
            setIsLiked(false);
        } else if (!isLiked && isDisliked) {
            setVoteChange(voteChange + 2);
            setIsOffline(false);
            patchArticle(article.article_id, 2).catch((err) => {
                console.log(err);
                setVoteChange(0);
                setIsOffline(true); 
            })
            setIsLiked(true);
            setIsDisliked(false);
            document.getElementById("like").style.backgroundColor = "green";
            document.getElementById("like").style.color = "white";
            document.getElementById("dislike").style.backgroundColor = null;
            document.getElementById("dislike").style.color = null;
        }
    }

    const handleDislike = () => {
        if (!isDisliked && !isLiked) {
            setVoteChange(voteChange + -1);
            setIsOffline(false);
            patchArticle(article.article_id, -1).catch((err) => {
                console.log(err);
                setVoteChange(0);
                setIsOffline(true); 
            })
            setIsDisliked(true);
            document.getElementById("dislike").style.backgroundColor = "red";
            document.getElementById("dislike").style.color = "white";
        } else if (isDisliked && !isLiked) {
            setVoteChange(voteChange + 1);
            setIsOffline(false);
            patchArticle(article.article_id, 1).catch((err) => {
                console.log(err);
                setVoteChange(0);
                setIsOffline(true); 
            })
            setIsDisliked(false);
            document.getElementById("dislike").style.backgroundColor = null;
            document.getElementById("dislike").style.color = null;
        } else if (!isDisliked && isLiked) {
            setVoteChange(voteChange + -2);
            setIsOffline(false);
            patchArticle(article.article_id, -2).catch((err) => {
                console.log(err);
                setVoteChange(0);
                setIsOffline(true); 
            })
            setIsDisliked(true);
            setIsLiked(false);
            document.getElementById("dislike").style.backgroundColor = "red";
            document.getElementById("dislike").style.color = "white";
            document.getElementById("like").style.backgroundColor = null;
            document.getElementById("like").style.color = null;
        }
    }
    
    if (!loggedInUser.username) {
        return <p className="votes-no-loggin">Votes: {article.votes}</p>;
    }
     
    return (
        <section className="single-article-votes">
            <button onClick={handleLike} id="like">Like 👍🏻</button>
            <p>{article.votes + voteChange}</p>
            <button className="dislike" onClick={handleDislike} id="dislike">Dislike 👎🏻</button>
            {isOffline ? <p>Network Offline</p> : null}
        </section>
    )
}

export default Votes;