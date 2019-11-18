import React from 'react';
import NewsFeedMakePost from './NewsFeedMakePost';
import NewsFeedOldPost from './NewsFeedOldPost';
import PropTypes from 'prop-types';


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
        <NewsFeedOldPost name={newsFeedOldPost.name}
          key={index}/>
         
      )}

    </div>
  );

}
Newsfeed.propTypes={
  name: PropTypes.string
};

export default Newsfeed;