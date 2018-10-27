import React, { Component } from 'react';
import {
    Card, CardTitle, CardText, Button, Col, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import './Article.css'
import API from '../../utils/API.js'

class Article extends Component {

    // state = {
    //     title: "",
    //     body: ""
    // }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            popoverOpenSecond: false,
            title: "",
            body: ""
        };
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    toggleSecond() {
        this.setState({
            popoverOpenSecond: !this.state.popoverOpen
        });
    }

    submitNote(){
        API.postNote(this.articleid).then(function(res){
            console.log(res.status)
        })
    }

    renderBtns = () => {
        if (this.props.notes.length > 0) {
            console.log('if')
            return (<div>
                <Button id={`Popover${this.props.index}`} data-array={JSON.stringify(this.props.notes)} onClick={this.toggle} className="noteBtns newNoteBtn">New Note</Button>
                <Button id={`PopoverSecond${this.props.index}`} data-array={JSON.stringify(this.props.notes)} onClick={this.toggleSecond} className="noteBtns allNoteBtn">View Notes</Button>
            </div>)
        }
        else {
            console.log('else')
            return (
                <Button id={`Popover${this.props.index}`} data-array={JSON.stringify(this.props.notes)} onClick={this.toggle} className="noteBtns newNoteBtn">New Note</Button>

            )
        }
    }

    render() {
        return (
            <Col className='itemHolder clearfix' sm='3'>
                <Card body>
                    <div className="articleHolder">
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText><a href={this.props.link}>Link to Article</a></CardText>
                    </div>
                    {this.renderBtns()}
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`Popover${this.props.index}`} toggle={this.toggle}>
                        <PopoverHeader>New Note</PopoverHeader>
                        <PopoverBody>
                            <p>Title:</p>
                            <input name="title" className='newNoteTitle' onChange={this.captureInput}></input>
                            <p>Body:</p>
                            <textarea name="body" className='newNoteBody'  onChange={this.captureInput}></textarea>
                            <Button articleid={this.props.id} className="addNoteBtn" onClick={this.submitNote}>Add Note</Button>
                        </PopoverBody>
                    </Popover>
                    <Popover placement="bottom" isOpen={this.state.popoverOpenSecond} target={`PopoverSecond${this.props.index}`} toggle={this.toggle}>
                        <PopoverHeader>New Note</PopoverHeader>
                        <PopoverBody>
                            <p>HelloWorld</p>
                        </PopoverBody>
                    </Popover>
                </Card>
            </Col>
        )
    }
}

// {this.props.notes.map(function(part, index) {
// return (
//     <div key ={index} className="noteHolder">
//         <span className="noteTitle">{part.title}</span>
//         <p className="noteBody">{part.body}</p>
//     </div>
// )
// })}
export default Article;