import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import Login from "./pages/login/login.js";
import Home from "./pages/home/home.js";
import Footer from "./components/footer/footer.js";
import { Contact } from "./pages/contact/contact";
import Register from "./pages/register/register.js";
import JoiningRoom from "./pages/joiningRoom.js";
// import IndexPage from "./pages/index/index.js";
// import Messenger from "./pages/messenger/messenger.js";
// import { useState, useEffect } from "react";
// import { useUser } from "../src/context/User.context";
// import ChatroomPage from "./pages/chat/chatroomPage.js";
// import DashboardPage from "./pages/dashboard/dashboard.js";

function App() {
  // const { socket, setSocket } = useUser();

  // const setupSocket = () => {
  //   const token = localStorage.getItem("Token");
  //   if (token && !socket) {
  //     const newSocket = io.connect("http://localhost:3002", {
  //       query: {
  //         token: token,
  //       },
  //     });
  //     console.log(newSocket);

  // newSocket.on("disconnect", () => {
  //   setSocket(null);
  //   // setTimeout(setupSocket, 3000);
  //   console.log("disconnected");
  // });

  //     newSocket.on("connect", () => {
  //       console.log("connected");
  //     });

  //     setSocket(newSocket);
  //   }
  // };

  // useEffect(() => {
  //   setupSocket();
  //eslint-disable-next-line
  // }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route path="/" component={IndexPage} exact /> */}
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/messenger" component={Messenger} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <Route path="/login" render={() => <Login />} exact /> */}
        {/* <Route path="/dashboard" render={() => <DashboardPage />} exact /> */}
        {/* <Route exact path="/dashboard" component={DashboardPage} /> */}
        <Route exact path="/dashboard" component={JoiningRoom} />
        {/* <Route path="/chatroom/:id" render={() => <ChatroomPage />} exact /> */}
        {/* <Route exact path="/chatroom/:id" component={ChatroomPage} /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
