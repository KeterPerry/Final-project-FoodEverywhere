import io from "socket.io-client";
import { useState } from "react";
import Chat from "../components/Chat.js";
// const socket = io.connect("http://localhost:3001");
// console.log("this is", socket);
function JoiningRoom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const token = localStorage.getItem("Token");
  const socket = io.connect(
    "http://localhost:3000"
    // query: {
    //   token: token,
    // },
  );

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1>Join A Chat</h1>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default JoiningRoom;
