import React, { useState } from "react";
import "./ChatRooms.css";
import { useName } from "../../store/useStore";
import { authGetAPI } from "../../api/customAPI";
import ChatProfileCard from "../../component/ChatProfileCard/ChatProfileCard";

function ChatRooms() {
  const userName = useName();
  const [myInfo, setMyInfo] = useState({});
  const [chatList, setChatList] = useState([]);

  // 내 정보 불러오기
  const getMyInfo = async () => {
    const responseData = await authGetAPI("/users/me");
    if (responseData) {
      setMyInfo(responseData);
    } else {
      console.error("내 정보 불러오기 실패");
    }
  };

  // 채팅방 목록 불러오기
  const getChatLists = async () => {
    const responseData = await authGetAPI("/users/me/chatrooms");
    if (responseData) {
      setChatList(responseData);
    } else {
      console.error("채팅방 목록 불러오기 에러");
    }
  };

  React.useEffect(() => {
    // console.log(userName);
    getMyInfo();
    getChatLists();
  }, [userName]);

  return (
    <>
      <div className="left-line"></div>
      <div className="content-area">
        <p>
          <span>{userName}</span> 님의 채팅
        </p>
        <div>
          <ChatProfileCard data={myInfo} state="me" />
        </div>
        <div className="under-line"></div>
        <div>
          {chatList.map((room) => (
            <ChatProfileCard key={room.id} data={room} state="other" />
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatRooms;
