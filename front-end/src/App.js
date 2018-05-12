import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import { Launcher } from './react-chat-window/src'
import messageHistory from './react-chat-window/demo/src/messageHistory';

import 'react-chat-widget/lib/styles.css';
import './index.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PplList: ['Alice', 'Bob', 'Christ', 'David', 'Evan'],
      user: "",
      personInTalk: "",
      contactList: [],

      // messageList: [],
      totalMessages: [],
      messageList: messageHistory,
    };
  }

  componentDidMount() {
    let polling = () => {
      if (this.state.user == "") return;
      // else {
      //   fetch("http://127.0.0.1:3001/users")
      // };
    }
    setInterval(polling, 1000);
  }


  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
    console.log(message);
  }

  chooseWhoAmI = (name) => {
    let userIdx = this.state.PplList.findIndex((ele) => { return ele === name; });
    this.setState({
      user: name,
      contactList: this.state.PplList.slice(0, userIdx).concat(this.state.PplList.slice(userIdx + 1, this.state.PplList.length))
    })

  }

  choosePersonInTalk = (name) => {
    this.setState({
      personInTalk: name
    });
  }

  render() {
    let members = this.state.PplList.map((ele, idx) => {
      return (
        <button onClick={() => { this.chooseWhoAmI(ele) }} key={idx}> {ele} </button>
      )
    });
    let contactList = this.state.contactList.map((ele, idx) => {
      return (
        <button onClick={() => this.choosePersonInTalk(ele)} key={idx}> {ele} </button>
      )
    });
    return (<div>
      <h1> {this.state.user.length == 0 ? "Choose who you are" : this.state.user} </h1>
      <h2> I am {members} </h2>
      <h1> Contact List </h1>
      <h2> I want to chat with {contactList}</h2>
      <h1> {this.state.personInTalk.length == 0 ? "" : `Person in conversation: ${this.state.personInTalk}`} </h1>
      <div>
        <Launcher
          agentProfile={{
            teamName: this.state.personInTalk,
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={(new_obj) => this._onMessageWasSent(new_obj)}
          messageList={this.state.messageList}
        // showEmoji
        />
      </div>
    </div>)
  }
}

export default App;

// componentDidMount() {
//   return fetch('http://127.0.0.1:3001/birds/users')
//     .then(response => response.json())
//     .then((responseJson) => {
//       console.log(typeof (responseJson));
//       console.log(responseJson.movies);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }