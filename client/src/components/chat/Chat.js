import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import userApi from "../../apis/userApi.js";
import "./Chat.css";

function Chat({ socket, username, room, currentUserID }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  console.log(socket);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        name: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      console.log(messageData);
      setCurrentMessage("");

      const { data } = await userApi().post("/messages/newMessage", {
        room: room,
        user: currentUserID,
        message: currentMessage,
      });
      console.log(data);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window-wrapper">
      <div className="chat-window">
        <div
          className="chat-header"
          style={{
            textAlign: "center",
            paddingTop: "5px",
          }}
        >
          <h1>You are in {room} food room!</h1>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent, index) => {
              return (
                <div
                  key={index}
                  className="message"
                  id={username === messageContent.name ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            className="chat-input"
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button className="send" onClick={sendMessage}>
            &#9658;
          </button>
        </div>
      </div>
      <div
        className="chat-right"
        style={{ display: "flex", width: "60%", height: "100%" }}
      >
        <div
          className="pic-left"
          style={{
            display: "flex",
            width: "50%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <img
            alt=""
            src="../../../chat1.jpg"
            style={{ width: "100%", height: "50%" }}
          ></img>
          <img
            src="../../../chat2.jpg"
            style={{ width: "100%", height: "50%" }}
          ></img>
        </div>
        <img
          src="../../../chat3.jpg"
          style={{ width: "50%", height: "100%" }}
        ></img>
      </div>
    </div>
  );
}

export default Chat;
