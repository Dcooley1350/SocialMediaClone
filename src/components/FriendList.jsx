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
           
            `}
            
            </style>
               
            <h2>Lorem Ipsum</h2>
            {masterFriendList.map((friend, index) =>
            <Friend name={friend.name}/>
         
            )}
            <br/>
        </div>
    );
}

export default FriendList;



