import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

const uuidv4 = require('uuid/v4');


class App extends Component {

  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      // const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      // const messages = this.state.messages.concat(newMessage);
      this.socket = new WebSocket(
        process.env.REACT_APP_SOCKET_SERVER || "ws://localhost:3001",
      );

      // Connection opened
      this.socket.onopen = event => {
        this.socket.send("{\"message\":\"Hello Server\"}");
      }

      // Listen for messages
      const EVENT_MESSAGE_KEY = "message";
    // }, 3000);
  }

  addMessage=(message) => {
    const messages = this.state.messages.concat(message)
    console.log(messages);
    this.setState({messages: messages})
    this.socket.send(JSON.stringify(message))
  }



  render() {
    return (
      <div>
        <NavBar/>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage}/>
      </div>
    );
  }
}
export default App;
