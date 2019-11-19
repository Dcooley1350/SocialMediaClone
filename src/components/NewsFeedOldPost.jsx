import React from 'react';
import Poictogram from './Poictogram';
import PropTypes from 'prop-types';
import LikeButtonController from './LikeButtonController';

function NewsFeedOldPost(props) {

  var poictogramStyles={
    marginTop: 'auto',
    maginBottom: 'auto',
    paddingLeft: '50px',
    paddingRight: '50px',
    height: '80%',
    width: '80%',
    borderColor: 'red'
  };
  // var buttonStyles={
  //   backgroundColor: 'blue',
  //   color: 'white'
  // };

  return(
    <div className="">
      <style jsx>{`


            `}
      </style>

      <div className="card">
        <div className="card-body">
            
          <div className="row">
            
            <div className="col l2">
              <Poictogram style={poictogramStyles}/>
            </div>
            
            <div className="col l10">
              <h2>{props.name}</h2>
              <p>{props.post}</p>
              <LikeButtonController className='right'/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

NewsFeedOldPost.propTypes={
  name: PropTypes.string,
  post: PropTypes.string
};

export default NewsFeedOldPost;