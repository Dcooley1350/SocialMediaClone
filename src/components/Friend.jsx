import React from 'react';
import Poictogram from './Poictogram';


function Friend(props){
    return (
        <div className= "greyDivBorder">
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
    )
}

export default Friend;