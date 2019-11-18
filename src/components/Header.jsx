import React from 'react';
import { Link } from 'react-router-dom';
import FaceBook from '../img/facebookicon.png';
import $ from 'jquery';

function Header() {
  var navColor = {
    backgroundColor: 'lightblue',
    color: 'black',
    fontWeight: 'bold'
  };
  var navTextStyle ={
    color: 'black',
    fontWeight: 'bold'
  };
  var iconStyles ={
      height: '50px',
      width: '50px',
      paddingTop: '10px'
  }

  return(
    <header  className="navbar-fixed">
      <nav>
        <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">Manage Groups</a></li>
            <li><a href="#!">Settings</a></li>
            <li class="divider"></li>
            <li><a href="#!">Log Out</a></li>
        </ul>
        <div style={navColor} className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to='/'><i ><img style={iconStyles} src={FaceBook} alt="facebook icon"></img></i></Link></li>
           <li>
               <form>
        <div className="input-field">
          <input id="search" type="search" required/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
      </li>

          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link style={navTextStyle} to='Profile'>Profile</Link></li>
            <li><Link style={navTextStyle} to='Home'>Home</Link></li>
            <li><Link style={navTextStyle} to='Create'>Create</Link></li>
            <li><Link style={navTextStyle} to='Employee'>Friends</Link></li>
            <li><Link style={navTextStyle} to='Notifications'>Notifications</Link></li>
            <li><a className="dropdown-trigger" href="#!" dataTarget="dropdown1">...</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
});

export default Header;