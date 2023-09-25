import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChat = async () => {
    try {
      const { response } = await axios.get("/api/chat");
      setChats(response);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };
  useEffect(() => {
    fetchChat();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
