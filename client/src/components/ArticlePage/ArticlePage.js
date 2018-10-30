import React from 'react';
import './ArticlePage.css';

const ArticlePage = ({ match }) => {



    return (

        // <div>
        //     <p>
        //         {match.params.direction}
        //     </p>
        // </div>

                <div>
                    <h3>ID: {match.params.id}</h3>
                </div>
    )
}
export default ArticlePage
