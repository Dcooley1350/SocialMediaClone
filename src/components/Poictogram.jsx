import React from 'react';
import FaceBook from '../img/facebook.jpeg';
function Poictogram(){
  var PoictogramStyle= {
      bordercColor: 'blue',
      borderStyle: 'solid',
      width: '75px',
      height: '75px',  
  }
  return(
    <div >
      <img className="Poictogram" style={PoictogramStyle} src={FaceBook}>
      </img>
      <br>
      </br>
    </div>
  );
}

export default Poictogram;