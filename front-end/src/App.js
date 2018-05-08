import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import { Launcher } from './react-chat-window/src'
import messageHistory from './react-chat-window/demo/src/messageHistory';

import 'react-chat-widget/lib/styles.css';
import './index.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  componentDidMount() {
    return fetch('http://127.0.0.1:3001/birds/users')
      .then(response => response.json())
      .then((responseJson) => {
        console.log(typeof (responseJson));
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (<div>
      <h3> hello world </h3>
      <div>
        <Launcher
          agentProfile={{
            teamName: 'react-live-chat',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
        // showEmoji
        />
      </div>
    </div>)
  }
}

export default App;