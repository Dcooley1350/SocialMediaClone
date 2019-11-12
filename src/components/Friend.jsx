import React from 'react';


function Friend(props){
    return (
        <div>
            <style jsx>{`
                .friendRow{
                    border-style: solid;
                    border-color: black;
                    width: 100;
                    height: 100;
                
                }
                button{
                    background-color: blue;
                }
               
            `}
            </style>
          <div class="row friendRow">
          <div class="col-md-4">
          <box>i am a box</box>
        <button type="button">Add Friend</button>
          </div>
          <div class="col-md-8">
            <h2>{props.name}</h2>
            <br/>
            <button>Button</button>
          
          </div>
          </div>
        </div>
    )
}

export default Friend;