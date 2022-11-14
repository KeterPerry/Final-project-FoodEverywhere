import io from "socket.io-client";
import { useState, useEffect } from "react";

import Chat from "../../components/chat/Chat.js";
import "./joiningRoom.css";

let socket;
function JoiningRoom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(true);

  const token = localStorage.getItem("Token");
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
    console.log(room);
  };

  return (
    <div className="room-container">
      {showChat ? (
        <div className="joinChatContainer">
          <h1 className="join">Join A Chat!</h1>
          <input
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

          <button onClick={() => joinRoom(socket)}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default JoiningRoom;
