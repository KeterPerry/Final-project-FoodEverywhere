import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "../../components/chat/Chat.js";
import "./joiningRoom.css";
// const socket = io.connect("http://localhost:3001");
// console.log("this is", socket);
let socket;
function JoiningRoom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const token = localStorage.getItem("Token");
  useEffect(() => {
    socket = io.connect(
      "http://localhost:3000"
      // query: {
      //   token: token,
      // },
    );
  }, []);

  const joinRoom = (socket) => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const handleRoom = (e) => {
    console.log(e.target.value);
    setRoom(e.target.value);
    console.log(room);
  };

  return (
    <div className="room-container">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1 className="join">Join A Chat!</h1>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <select
            type="text"
            placeholder="Room ID..."
            onChange={handleRoom}
            value={room}
          >
            {/* <option disabled>Choose Prefered type of food </option> */}
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
