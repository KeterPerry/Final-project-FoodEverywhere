import io from "socket.io-client";
import { useState, useEffect } from "react";
import Button from "../../components/button/button";

import { useUser } from "../../context/User.context.js";
import Chat from "../../components/chat/Chat.js";
import "./joiningRoom.css";

let socket;
function JoiningRoom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(true);
  const { currentUser, setCurrentUser } = useUser();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("User");
    // const token = localStorage.getItem("Token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
      console.log(foundUser);
    }
  }, []);

  useEffect(() => {
    socket = io.connect("http://localhost:3000");
  }, []);

  const joinRoom = (socket) => {
    if (username === "") {
      alert("Please enter your name!");
    }
    console.log("join");
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(false);
    }
  };

  const handleRoom = (e) => {
    console.log(e.target.value);
    setRoom(e.target.value);
  };

  return (
    <div className="room-container">
      {showChat ? (
        <div className="joinChatContainer">
          <div className="chat-window-left">
            <h1 className="join">Join a Chat!</h1>
            <div className="chat-wrapper">
              <input
                className="name-input"
                type="text"
                placeholder=" Enter your name..."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <h2>Choose your topic:</h2>
              <select
                type="text"
                placeholder="Room ID..."
                onChange={handleRoom}
                value={room}
              >
                <option value="Italian">Italian Food</option>
                <option value="Chinese">Chinese Food</option>
                <option value="Israeli">Israeli Food</option>
                <option value="Japanese">Japanese Food</option>
                <option value="American">American Food</option>
              </select>
              {/* <input type="text" placeholder="Room ID..." onChange={handleRoom} /> */}
            </div>
            <button className="join-button" onClick={() => joinRoom(socket)}>
              Join A Room
            </button>
          </div>
          <div className="img-div" style={{ width: "50%", height: "100%" }}>
            <img
              src="../../../chat-pic.jpg"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </div>
      ) : (
        <Chat
          socket={socket}
          username={username}
          room={room}
          currentUserID={currentUser._id}
        />
      )}
    </div>
  );
}

export default JoiningRoom;
