// src/hooks/useChatRooms.js
import { useState, useEffect } from "react";
import { authGetAPI } from "../api/customAPI";

export function useChatRooms() {
  const [myInfo, setMyInfo] = useState(null);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const me = await authGetAPI("/users/me");
        const rooms = await authGetAPI("/users/me/chatrooms");
        setMyInfo(me);
        setChatList(rooms);
      } catch (err) {
        console.error("useChatRooms fetchData 에러:", err);
      }
    }
    fetchData();
  }, []);

  return { myInfo, chatList };
}
