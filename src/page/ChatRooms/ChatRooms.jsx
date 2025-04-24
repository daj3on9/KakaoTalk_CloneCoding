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
    getMyInfo();
    getChatLists();
  }, [userName]);

  // 내 정보 넘겨주기
  const getProfileForMe = (user) => ({
    name: user.name,
    profileImage: user.profile_image_url,
    statusMessage: user.bio || "상태메세지 없음",
    isMine: true,
  });

  // 채팅방 정보 넘겨주기
  const getProfileForRooms = (room) => ({
    name: room.other_user.name,
    profileImage: room.other_user.profile_image_url,
    statusMessage: room.last_message?.content || "메세지 없음",
    time: formatTime(room.last_message?.updated_at) || "",
    isMine: false,
  });

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <div className="left-line"></div>
      <div className="content-area">
        <p>
          <span>{userName}</span> 님의 채팅
        </p>
        <ChatProfileCard profile={getProfileForMe(myInfo)} />
        <div className="under-line"></div>
        <div className="chatRoom-list-area">
          {chatList.map((room) => (
            <ChatProfileCard
              key={room.id}
              profile={getProfileForRooms(room)}
              onClick={() => console.log(`${room.id} 클릭!`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatRooms;
