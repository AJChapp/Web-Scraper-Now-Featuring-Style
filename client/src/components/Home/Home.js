import React, { Component } from 'react';
import API from '../../utils/API.js';
import './Home.css';
import Article from '../Article/Article.js'
import {
    Container
} from 'reactstrap'

class Home extends Component {
    state = {
        articles: [],

    }

    componentDidMount() {
        this.getArticles()
    }

    getArticles = () => {
        if (this.state.articles.length <= 0) {
            API.getArticles().then((data) => {
                this.setState({
                    articles: data.data,
                });

            })

        }
    }

    addNote = (index, newNote) => {
        let tempArray = JSON.parse(JSON.stringify(this.state.articles))
        tempArray[index].push(newNote)
        this.setState({
            articles:tempArray
        })
    }

    updateNote = (index, noteIndex) => {
        let tempArray = JSON.parse(JSON.stringify(this.state.articles))
        tempArray[index].notes.splice(noteIndex, 1)
        this.setState({
            articles: tempArray
        })
    }

    render() {
        return (

            <div>
                <h1 className='HomeTitle'>EchoJS Articles</h1>
                <Container className='Home'>

                    {this.state.articles.map((part, index) => {
                        return <Article addNote={this.addNote} updateNote={this.updateNote} key={index} index={index} id={part._id} title={part.title} link={part.link} notes={part.notes} />
                    })}

                </Container>
            </div>
        )
    }
}

export default Home