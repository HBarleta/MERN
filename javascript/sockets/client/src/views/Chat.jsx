import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Chat = () => {
  // set state for messages, username, input, approval process
  const [approve, setApprove] = useState(false);
  const [username, setUserName] = useState("");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    console.log("Is this running?");
    // socket.on("welcome", (data) => console.log(data));
    socket.on("post chat", (msg) => {
      setMessages((prevMesgState) => [...prevMesgState, msg]);
    });
    return () => socket.removeAllListeners(true);
  }, [socket]);

  const usernameHandler = (e) => {
    console.log("usernameHandler function");
    e.preventDefault();
    if (username) {
      setApprove(true);
    }
  };

  const submitHandler = (e) => {
    console.log("submitHandler function");
    e.preventDefault();
    socket.emit("chat", { username: username, content: input });
    setInput("");
  };

  return (
    <div className="container">
      <h1>Chat</h1>
      {!approve ? (
        <form onSubmit={usernameHandler}>
          <label>Enter a user name:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
          <button type="submit" className="btn btn-danger">
            Enter
          </button>
        </form>
      ) : (
        <div className="chat-input">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" className="btn btn-outline-primary">
              Send
            </button>
          </form>
          <div className="chats">
            <div className="card text-center">
              <div className="card-header">Chat App:</div>
              <div className="card-body">
                {messages.map((msg, idx) => {
                  return (
                    <p key={idx}>
                      {msg.username}: {msg.content}
                    </p>
                  );
                })}
              </div>
              <div className="card-footer"> Socket.io lecture</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
