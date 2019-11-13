import React from 'react';
import Newsfeed from './Newsfeed';
import '../App.css';
import FriendList from './FriendList';
import Description from './Description';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <style jsx>{`
          .greyDivBorder{
            border: 2;
            color: grey;
            border-color: grey;
            }
        `}
      </style>

    <div className="row">
    <div className="col-md-4"><Profile/><Description/></div>
    <div className="col-md-4"><Newsfeed/></div>
    <div className="col-md-4"><FriendList/></div>
    </div>
    </div>
  );
}

export default App;
