import React, { Component } from 'react';
import {
    Card, CardTitle, CardText, Button
} from 'reactstrap';
import './Article.css'
import API from '../../utils/API.js'

class Article extends Component {

    componentDidMount(){
        if(this.props.notes.length >0){
            console.log('worked')
            this.renderNote(this.props.notes[0])
        }
    }

    renderNote(id){
        API.getArticle(id).then(function(data){
            console.log(data)
        })
    }

    // pass in notes prop(array)
    isNotes(value) {
        // console.log(this.props)
        if (value.length >= 1) {
            return (<div className='Notes'>

                {value.map((part, index) => {
                    return (
                        <div key={index}>
                            <span className="NoteTitle">{part.title}</span>
                            <p>{part.body}</p>
                        </div>
                    )
                })}
                <Button> New Note</Button>
            </div>
            )
        }
        else {
            return <Button> New Note</Button>
        }
    }

    render() {
        return (
            <Card body>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>Link: {this.props.link}</CardText>
                <div>{this.isNotes(this.props.notes)}</div>
            </Card>
        )
    }
}

export default Article;