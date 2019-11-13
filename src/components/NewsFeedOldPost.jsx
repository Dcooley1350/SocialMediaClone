import React from 'react';
import Poictogram from './Poictogram';

function NewsFeedOldPost(props) {
    return(
        <div className="greyDivBorder">
            <style jsx>{`


            `}
            </style>

            <div className="card">
            <div className="card-body">
            
            <div className="row">
            
            <div className="col-md-3">
            <Poictogram/>
            </div>
            
            <div className="col-md-9">
            <h2>{props.name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et.</p>
            </div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default NewsFeedOldPost;