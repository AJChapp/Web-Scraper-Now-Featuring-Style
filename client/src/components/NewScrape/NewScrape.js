import React, { Component } from 'react';
import './NewScrape.css'
import { Button } from 'reactstrap';
import API from '../../utils/API.js';
import { Redirect } from 'react-router'

class NewScrape extends Component {

    state = {
        redirect: false
    }

    handleClick=()=> {
        API.scrape().then((data)=> {
            console.log(data.data.success)
                this.setState({
                    redirect:true
                })

        })
    }

    redirector = () => {
        if (this.state.redirect) {
            return (
                <Redirect to='/' />
            )
        }
    }

    render() {

        return (
            <div className="NewScrape">
                {this.redirector()}
                <h1>Scrape New Articles</h1>
                <div onClick={this.handleClick} >
                    <Button>Scrape New Articles</Button>
                </div>
                <h5>This will delete any previous articles</h5>
                <p>This site scraped from <a href="http://www.echojs.com/" >http://www.echojs.com/</a></p>
            </div>
        )
    }
}

export default NewScrape;