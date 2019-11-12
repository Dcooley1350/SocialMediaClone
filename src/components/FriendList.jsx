import React from 'react';
import Friend from './Friend';

var masterFriendList =  [
    {
        name: 'Anita'
    },
    {
        name: 'Mike'
    },
    {
        name: 'Lauren'
    }
];


function FriendList(){
    return (
        <div>
            <style jsx>{`
            div{
                border-style: solid;
                border-color: black;
              }
            `}
            
            </style>
               
            <h2>Lorem Ipsum</h2>
            {masterFriendList.map((friend, index) =>
            <Friend name={friend.name}/>
            )}
            <br/>
            <button type="button">Add Friend</button>
        </div>
    );
}





