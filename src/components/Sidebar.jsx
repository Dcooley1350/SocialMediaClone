import React from 'react';


function SideBar(){
  var Category = {
    fontWeight: 'bold'
  };
  var CategoryItem = {
    fontWeight: ''
  };
  return(
    <div>
      <p style={Category}>Joel H Mikerson</p>
      <p style={CategoryItem}>News Feed</p>
      <p style={CategoryItem}>Watch</p>
      <p style={CategoryItem}>MarketPlace</p>
      <p style={Category}>Shortcuts</p>
      <p style={CategoryItem}>Potluck</p>
      <p style={Category}>Explore</p>
      <p style={CategoryItem}>Explore</p>
      <p style={CategoryItem}>Explore</p>
      <p style={CategoryItem}>Explore</p>
      <p style={CategoryItem}>Explore</p>
    </div>
  );
}
export default SideBar;