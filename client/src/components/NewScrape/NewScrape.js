import React from 'react';
import './NewScrape.css'
import { Button } from 'reactstrap';
import API from '../../utils/API.js';
const NewScrape = () => {
    console.log(API.scrape)
    return (
        <div className="NewScrape">
            <h1>Scrape New Articles</h1>
            <div onClick={API.scrape.then(function (data) {
                console.log(data)
            })} >
                <Button>Scrape New Articles</Button>
            </div>
            <h5>This will delete any previous articles</h5>
            <p>This site scraped from <a href="http://www.echojs.com/" >http://www.echojs.com/</a></p>
        </div>
    )
}

export default NewScrape;