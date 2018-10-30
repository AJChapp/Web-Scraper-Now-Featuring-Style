import React, { Component } from 'react';
import {
    Card, CardTitle, CardText, Button, Col, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import './Article.css'
import API from '../../utils/API.js'


class Article extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            popoverOpenSecond: false,
            title: "",
            body: "",
            notes: this.props.notes.length
        };
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    toggle2 = () => {
        this.setState({
            popoverOpenSecond: !this.state.popoverOpenSecond
        });
    }

    submitNote = () => {
        let request = {
            title: this.state.title,
            body: this.state.body
        }
        API.postNote(this.props.id, request).then(function (res) {
            console.log(res.status)
        })
        this.toggle()
    }

    deleteNote = (part) => {
        console.log(this)
    }

    renderBtns = () => {
        if (this.props.notes.length > 0) {
            return (<div>
                <Button id={`Popover${this.props.index}`} onClick={this.toggle} className="noteBtns newNoteBtn">New Note</Button>
                <Button id={`PopoverSecond${this.props.index}`} onClick={this.toggle2} className="noteBtns allNoteBtn">View Notes</Button>
            </div>)
        }
        else {
            return (
                <Button id={`Popover${this.props.index}`} onClick={this.toggle} className="noteBtns newNoteBtn">New Note</Button>
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
                            <textarea name="body" className='newNoteBody' onChange={this.captureInput}></textarea>
                            <Button articleid={this.props.id} className="addNoteBtn" onClick={this.submitNote}>Add Note</Button>
                        </PopoverBody>
                    </Popover>
                    {this.props.notes.length > 0 ? <Popover placement="bottom" isOpen={this.state.popoverOpenSecond} target={`PopoverSecond${this.props.index}`} toggle={this.toggle2}>
                        <PopoverHeader>Current Notes</PopoverHeader>
                        <PopoverBody>
                            {
                                this.props.notes.map((part, index) => {
                                    return (
                                        <div key={index} className={"currentNote currentNote" + index}>
                                            <Button close className="deleteBtn" color="danger" onClick={() => this.deleteNote(part)}/>
                                            <p className="currentNoteTitle">{part.title}</p>
                                            <p className="currentNoteBody">{part.body}</p>
                                        </div>
                                    )
                                })
                            }
                        </PopoverBody>
                    </Popover> : ""}
                </Card>
            </Col>
        )
    }
}

export default Article;