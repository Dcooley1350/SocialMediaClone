import React from 'react';
import Poictogram from './Poictogram';
import PropTypes from 'prop-types';

function Friend(props){
  return (
    <div>
      <style jsx>{`      
                button{
                    background-color: blue;
                }
               
            `}
      </style>
      <div className="row friendRow">
        <div className="col-md-4">
          <Poictogram/>
          <br/>
          <button type="button">Add Friend</button>
        </div>
        <div className="col-md-8">
          <h2>{props.name}</h2>
          <br/>
          <button>Button</button>
          
        </div>
      </div>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string
};

export default Friend;