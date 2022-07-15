//   const sendMessage = () => {
//     // console.log("chatroomMessage");
//     console.log(socket);
//     console.log(messageRef.current.value);
//     if (socket) {
//       socket.emit("send_message", {
//         chatroomId: chatroomId,
//         message: messageRef.current.value,
//       });

//       messageRef.current.value = "";
//     }
//   };

//   React.useEffect(() => {
//     console.log("useEffect");
//     const token = localStorage.getItem("Token");
//     if (token) {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       setUserId(payload._id);
//       console.log(payload._id);
//     }
//     if (socket) {
//       socket.on("receive_message", (data) => {
//         console.log(data);
//         const newMessages = [...messages, data];
//         console.log(newMessages);
//         setMessages(newMessages);
//         // socket.on(
//         //   "receive_message",
//         //   (data) => {
//         //     setMessageReceived(data.message);
//       });
//     } else {
//       console.log("no socket");
//     }
//   }, [(messages, socket)]);

//   React.useEffect(() => {
//     if (socket) {
//       socket.emit("joinRoom", {
//         chatroomId,
//       });
//     }
//     return () => {
//       //Component Unmount
//       if (socket) {
//         socket.emit("leaveRoom", {
//           chatroomId,
//         });
//       }
//     };
//     //eslint-disable-next-line
//   }, [socket]);
