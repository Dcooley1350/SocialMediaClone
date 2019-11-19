import React from 'react';
import PropTypes from 'prop-types';
 

function LikeButtonTrue (props){


  
  return(
    <div>
      <style jsx>{`
            i:hover{
                cursor: pointer;
            }
            
            `}
            
      </style>
      <i onClick={props.onDisLikeClick} className="material-icons">favorite</i>
    </div>
  );

}
    

LikeButtonTrue.propTypes = {
  onDislikeClick: PropTypes.func
};

export default LikeButtonTrue;