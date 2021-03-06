import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    if (!this.props.message.username) {
      return (<div className="notification">
        <span className="notification-content">{this.props.message.content}</span>
      </div>)
    } else {

      return (<p>
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </p>);
    }
  }
}
export default Message;
