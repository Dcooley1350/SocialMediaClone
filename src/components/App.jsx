import React from 'react';
import Newsfeed from './Newsfeed';
import FriendList from './FriendList';
import Header from './Header';
import '../css/GlobalStyles.css';
import SideBar from './Sidebar';

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

      <Header/>
      <div className="fullHeightRow row">
        <div className="col l2 sidebar fullHeightRow"><SideBar/></div>
        
        <div className="col l8"><Newsfeed/></div>
        <div className="col l2"><FriendList/></div>
      </div>
    </div>
  );
}

export default App;
