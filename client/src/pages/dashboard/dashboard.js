import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import userApi from "../../apis/userApi.js";
import { useUser } from "../../context/User.context.js";
import "./dashboard.css";

const DashboardPage = (props) => {
  const { chatrooms, setChatrooms } = useUser();
  const { currentUser, setToken, socket, setSocket } = useUser();
  console.log(currentUser);
  const token1 = localStorage.getItem("Token");

  console.log(token1);
  const getChatrooms = () => {
    userApi({
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
      // body: currentUser,
    })
      .get("http://localhost:4000/chat")
      .then((response) => {
        console.log(response.data);
        setChatrooms(response.data);
      })
      .catch((err) => {
        console.error(err);
        // setTimeout(getChatrooms, 3000);
      });
  };

  useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="ChatterBox Nepal"
          />
        </div>
      </div>
      <button>Create Chatroom</button>
      <div className="chatrooms">
        {chatrooms.map((chatroom) => (
          <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={"/chatroom/" + chatroom._id}>
              {/* <Link to={"/chat/"}> */}
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
