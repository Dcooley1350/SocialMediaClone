import React from 'react';
import NewsFeedMakePost from './NewsFeedMakePost';
import NewsFeedOldPost from './NewsFeedOldPost';

var masterPostList =  [
    {
        name: 'Lorem ipsum'
    },
    {
        name: 'Lorem ipsum'
    },
    {
        name: 'Lorem ipsum'
    }
];

function Newsfeed(){
    return (
        <div>
            <style jsx>{`
            
            `}
            </style>
            <NewsFeedMakePost/>

            {masterPostList.map((newsFeedOldPost, index) =>
            <NewsFeedOldPost name={newsFeedOldPost.name}/>
         
            )}

        </div>
)

}

export default Newsfeed;