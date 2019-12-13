import React, { Component } from 'react';
import {
  handleInput,
  connectToChatkit,
  connectToRoom,
  sendDM,
  sendMessage,
  updateLanguage,
} from './methods';

import Dialog from './components/Dialog';
import RoomList from './components/RoomList';
import RoomUsers from './components/RoomUsers';
import ChatSession from './components/ChatSession';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      showLogin: true,
      isLoading: false,
      currentUser: null,
      currentRoom: null,
      rooms: [],
      roomUsers: [],
      roomName: null,
      messages: [],
      newMessage: '',
      language: 'en',
    };

    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    this.connectToRoom = connectToRoom.bind(this);
    this.sendDM = sendDM.bind(this);
    this.sendMessage = sendMessage.bind(this);
    this.updateLanguage = updateLanguage.bind(this);
  }

  render() {
    const {
      userId,
      showLogin,
      rooms,
      currentRoom,
      currentUser,
      messages,
      newMessage,
      roomUsers,
      roomName,
      language,
    } = this.state;

    return (
      <div className="App">
        <aside className="sidebar left-sidebar">
          {currentUser ? (
            <div className="user-profile">
              <span className="username">{currentUser.name}</span>
              <span className="user-id">{`@${currentUser.id}`}</span>
            </div>
          ) : null}
          {currentRoom ? (
            <RoomList
              rooms={rooms}
              currentRoom={currentRoom}
              connectToRoom={this.connectToRoom}
              currentUser={currentUser}
            />
          ) : null}
        </aside>
        <section className="chat-screen">
          <header className="chat-header">
            {currentRoom ? <h3>{roomName}</h3> : null}
          </header>
          <ul className="chat-messages">
            <ChatSession messages={messages} />
          </ul>
          <footer className="chat-footer">
            <form onSubmit={this.sendMessage} className="message-form">
              <input
                type="text"
                value={newMessage}
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
                onChange={this.handleInput}
              />
            </form>
          </footer>
        </section>
        <aside className="sidebar right-sidebar">
        {showLogin ? (
                <Dialog
                  userId={userId}
                  handleInput={this.handleInput}
                  connectToChatkit={this.connectToChatkit}
                />
              ) : null}

          {currentRoom ? (
            <RoomUsers
              currentUser={currentUser}
              sendDM={this.sendDM}
              roomUsers={roomUsers}
            />
          ) : null}
          {currentRoom ? (
            <select
              id="language"
              className="language"
              name="language"
              value={language}
              onChange={this.updateLanguage}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="ru">Russian</option>
              <option value="chi">Chinese</option>
            </select>
          ) : null}
        </aside>
        
      </div>
    );
  }
}

export default App;
