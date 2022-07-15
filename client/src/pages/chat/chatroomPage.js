import React from "react";
import { useState } from "react";
import { useUser } from "../../context/User.context.js";
import { withRouter } from "react-router-dom";
import "./chatroomPage.css";

// import { withRouter } from "react-router-dom";
function ChatroomPage({ match }) {
  const { socket } = useUser();
  // const chatroomId = "/chat/";
  const chatroomId = match.params.id;
  const [messages, setMessages] = useState([]);
  const messageRef = React.useRef();
  const [userId, setUserId] = useState("");
  // const [messageInput, setMessageInput] = useState();

  console.log(socket);
  console.log(chatroomId);
  console.log(messages);
  // console.log(messageInput);

  // const handleChange = (e) => {
  //   setMessageInput(e.target.value);
  // };

  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: messageRef.current.value,
      });

      messageRef.current.value = "";
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
  }, [messages]);

  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        <div className="cardHeader">Chatroom Name</div>
        <div className="chatroomContent">
          {messages.map((message, i) => (
            <div key={i} className="message">
              <span
                className={
                  userId === message.userId ? "ownMessage" : "otherMessage"
                }
              >
                {message.name}:
              </span>{" "}
              {message.message}
            </div>
          ))}
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="Say something!"
              ref={messageRef}
              // value={messageInput}
              // onchange={handleChange}
            />
          </div>
          <div>
            <button className="join" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ChatroomPage);
