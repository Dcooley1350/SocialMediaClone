import React from 'react';
import LikeButtonTrue from './LikeButtonTrue';
import LikeButtonFalse from './LikeButtonFalse';


class LikeButtonController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      LikeButtonFull: false,
      Likes: 0
    };
    this.handleLikeClick= this.handleLikeClick.bind(this);
    this.handleDisLikeClick= this.handleDisLikeClick.bind(this);
  }
  handleLikeClick(){
    var likeSetter = this.state.Likes;
    likeSetter +=1;
    this.setState({LikeButtonFull: true, Likes: likeSetter});
  }
  handleDisLikeClick(){
    var likeSetter = this.state.Likes;
    likeSetter -=1;
    this.setState({LikeButtonFull: false, Likes: likeSetter});
  }
  render(){
    let currentlyVisibleContent = null;
    if(this.state.LikeButtonFull){
      currentlyVisibleContent= <LikeButtonTrue onDisLikeClick={this.handleDisLikeClick}/>;
    }
    else{
      currentlyVisibleContent= <LikeButtonFalse onLikeClick={this.handleLikeClick}/>;
    }
    return(
      <div>
        {this.state.Likes}{currentlyVisibleContent}
      </div>

    );
  }
        
}

export default LikeButtonController;