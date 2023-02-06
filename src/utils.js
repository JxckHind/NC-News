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