import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';

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
               
      <h2>People You May Know</h2>
      {masterFriendList.map((friend, index) =>
        <Friend name={friend.name}
          key={index}/>
         
      )}
      <br/>
    </div>
  );
}

FriendList.propTypes={
  name: PropTypes.string
};

export default FriendList;



