import axios from "axios";

export const newsApi = axios.create({
    baseURL: `https://jack-nc-news-ap.onrender.com/api/`
})

export const fetchArticles = () => {
    return newsApi
    .get('articles')
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

export const patchArticle = (article_id, body) => {
    return newsApi
    .patch(`articles/${article_id}`, body)
    .then(({data}) => {
        return data;
    })
}