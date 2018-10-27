import React, { Component } from 'react';
import './NewScrape.css'
import { Button } from 'reactstrap';
import API from '../../utils/API.js';
import { Link } from 'react-router-dom';

class NewScrape extends Component {

    handleClick() {
        API.scrape().then(function (data) {
           console.log(data.data.success)
        })
    }

    render() {

        return (
            <div className="NewScrape">
                <h1>Scrape New Articles</h1>
                <div onClick={this.handleClick} >
                    <Link to="/" >
                        <Button>Scrape New Articles</Button>
                    </Link>
                </div>
                <h5>This will delete any previous articles</h5>
                <p>This site scraped from <a href="http://www.echojs.com/" >http://www.echojs.com/</a></p>
            </div>
        )
    }
}

export default NewScrape;