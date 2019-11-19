import React from 'react';
import Poictogram from './Poictogram';



function NewsFeedMakePost(props){
  let _post = null;
  let _name = null;

  function handleNewPostSubmission(event) {
    event.preventDefault();
    console.log(_post.value);
    console.log(_name.value);
    props.onAddingNewPostToList({name: _name.value, post: _post.value});
    _name.value='';
    _post.value='';
  }
  var marginStyles = {
    paddingRight: '25px',
    paddingLeft: '25px',
    backgroundColor: 'white',
  };
  var buttonStyle= {
    backgroundColor: 'blue',
    color: 'white',
  };

  return(
    <div style={marginStyles}>
      <div className="container">
        <h5>What's on your mind?</h5>
      </div>
      <div className="row middleRow">
        <div className="col l2">
          <Poictogram ></Poictogram>
        </div>
        <div className="col l10">
          <form onSubmit={handleNewPostSubmission}>
            <input
              type='text'
              id='names'
              placeholder='Name'
              ref={(input) => {_name = input;}}/>
            <textarea rows="5" cols="25"
              ref={(textarea) => {_post = textarea;}}>Tell US!</textarea>
            <button style={buttonStyle} className ="right btn" type="submit">Post</button>
          </form>
        </div>
        <br/>
      </div>
    </div>

  );

}

export default NewsFeedMakePost;