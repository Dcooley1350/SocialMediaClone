import React from 'react';
import NewsFeedMakePost from './NewsFeedMakePost';
import NewsFeedOldPost from './NewsFeedOldPost';
import PropTypes from 'prop-types';




class Newsfeed extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      masterPostList: []
    };
    this.handleAddingNewPostToList=this.handleAddingNewPostToList.bind(this);
  }
  handleAddingNewPostToList(newPost){
    var newMasterPostList= this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
    console.log(newMasterPostList);
  }
  render(){
    return(
    <div>
      <style jsx>{`
            
            `}
      </style>
      <NewsFeedMakePost onAddingNewPostToList={this.handleAddingNewPostToList}/>
      
      {this.state.masterPostList.map((feedpost, index) =>
        <NewsFeedOldPost name={feedpost.name}
          post={feedpost.post}
          key={index}/>
          
      )}
    </div>
    );
  } 
}
Newsfeed.propTypes={
  name: PropTypes.string
};

export default Newsfeed;