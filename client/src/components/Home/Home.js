import React, { Component } from 'react';
import API from '../../utils/API.js';
import './Home.css';
import Article from '../Article/Article.js'

class Home extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        if(this.state.articles.length<= 0){
            API.getArticles().then((data)=>{
                this.setState({articles: data.data});
            })

        }
    }

    render() {
        return (
            <div className = 'Home'>
                <h1 className = 'HomeTitle'>EchoJS Articles</h1>
                {this.state.articles.map((part, index)=>{
                    return <Article key ={index} id={part._id} title= {part.title} link = {part.link} notes = {part.notes} />
                })}
            </div>
        )
    }
}

export default Home