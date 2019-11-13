import React from 'react';
import Poictogram from './Poictogram';


function NewsFeedMakePost(){
    return(
        <div>
            <style jsx>{`
            .middleRow{
                padding: 15;

            }
            `}
            </style>

            <div className="row middleRow">
            <div className="col-md-3">
            <Poictogram></Poictogram>
            </div>
            <div className="col-md-9">
            <textarea rows="5" cols="25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et</textarea>
            </div>
            <br/>
            </div>
       </div>

    )

}

export default NewsFeedMakePost;