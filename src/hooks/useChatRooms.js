// src/hooks/useChatRooms.js
import { useState, useEffect } from "react";
import { getAPI } from "../api/customAPI";

export function useChatRooms() {
  const [myInfo, setMyInfo] = useState(null);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const me = await getAPI("/users/me");
        const rooms = await getAPI("/users/me/chatrooms");
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
