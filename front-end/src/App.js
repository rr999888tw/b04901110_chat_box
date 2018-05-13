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
      messageList: []
    };
  }

  // componentDidMount() {
  //   let polling = () => {
  //     if (this.state.user === "" || this.state.personInTalk === "") return;
  //     else return (fetch(`http://localhost:4500/users/${this.state.user}/${this.state.personInTalk}`)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         console.log(responseJson);
  //         this.setState({
  //           messageList: responseJson
  //         })
  //       })
  //       .catch((err) => {
  //         // console.log(err);
  //       })
  //     );

  //   }
  //   setInterval(polling, 2000);
  // }


  _onMessageWasSent(message) {

    var url = 'users/update';
    var data = { 
      sender: this.state.user,
      receiver: this.state.personInTalk,
      message: message.data
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    };

    fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((jsonObject) => {
      console.log(jsonObject)
    })
    .catch((err) => {
      console.error(err);
    });


    this.setState({
      messageList: [...this.state.messageList, message]
    });
    // console.log(message);

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