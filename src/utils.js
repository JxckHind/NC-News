import axios from "axios";

export const newsApi = axios.create({
    baseURL: `https://jack-nc-news-ap.onrender.com/api/`
})

export const fetchArticles = (searchParams) => {

    const params = Object.fromEntries(searchParams.entries());

    return newsApi
    .get('articles', {params})
    .then(({data}) => {
        return data;
    })
}

export const fetchArticle = (article_id) => {
    return newsApi
    .get(`articles/${article_id}`)
    .then(({data}) => {
        return data;
    })
}

export const fetchComments = (article_id) => {
    return newsApi
    .get(`articles/${article_id}/comments`)
    .then(({data}) => {
        return data;
    })
}

export const patchArticle = (article_id, voteChange) => {

    const body = {
        "inc_votes": voteChange 
    }

    return newsApi
    .patch(`articles/${article_id}`, body)
}

export const postComment = (article_id, newComment, loggedInUser) => {
    const request = {
        "username": loggedInUser,
        "body" : newComment
    }
    return newsApi
    .post(`articles/${article_id}/comments`, request)
    .then(({data}) => {
        return data;
    })
}

export const deleteComment = (comment_id) => {
    return newsApi
    .delete(`comments/${comment_id}`)
}

export const fetchUsers = () => {
    return newsApi
    .get('users')
    .then(({data}) => {
        return data;
    })
}