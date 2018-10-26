import axios from 'axios';

export default {
    getArticles: ()=>{
        return axios.get('/api/articles')
    },
    getArticle:(id)=>{
        return axios.get(`/api/articles/${id}`)
    },
    deleteNote:(id)=>{
        return axios.get(`/api/note/delete/${id}`)
    },
    postNote:(id)=>{
        return axios.post(`/api/articles/${id}`)
    },
    scrape:() =>{
        return axios.get('/api/scrape')
    }



}