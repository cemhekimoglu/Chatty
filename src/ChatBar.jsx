import React, {Component} from 'react';

class ChatBar extends Component {


  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.props.addMessage({username: this.props.currentUser.name, content: event.target.value})
      console.log('enter press here! ')
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser.name} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyPress={this.handleKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;
