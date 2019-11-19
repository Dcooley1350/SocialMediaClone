import React from 'react';
import PropTypes from 'prop-types';
 

function LikeButtonFalse(props){
  return(
    <div>
      <style jsx>{`
    i:hover{
        cursor: pointer;
    }
    
    `}
      </style>
      <i onClick={props.onLikeClick} className="material-icons">favorite_border</i>
    </div>
  );
}


LikeButtonFalse.propTypes={
  onLikeClick: PropTypes.func
};

export default LikeButtonFalse;