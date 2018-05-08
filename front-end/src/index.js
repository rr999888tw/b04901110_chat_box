import React, { Component } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Launcher } from './react-chat-window/src'
import messageHistory from './react-chat-window/demo/src/messageHistory';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



class Demo extends Component {

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



ReactDOM.render(<App />, document.getElementById('root'));