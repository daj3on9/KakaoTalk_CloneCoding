import React from "react";
import defaultImg from "../../assets/default.png";
import "./ChatProfileCard.css";
import { useNavigate } from "react-router-dom";
import { formatTime } from "../../utils/time";

export default function ChatProfileCard({
  profile,
  chatroomId,
  isMine = false,
}) {
  const navigate = useNavigate();

  // 프로필 사진 클릭 시 내 프로필로 이동
  const onClickImg = (e) => {
    e.stopPropagation();
    if (isMine) {
      navigate("/myProfile");
    }
  };

  // 채팅방으로 이동
  const handleClick = (e) => {
    e.preventDefault();

    if (!isMine) {
      navigate(`/ChatRooms/${chatroomId}/chats`, {
        state: {
          roomId: chatroomId,
          myUserId: profile.myUserId,
          otherUserName: profile.name,
          otherUserId: profile.otherUserId,
        },
      });
    }
  };

  // 내 채팅방으로 이동
  const handleMyChatClick = (e) => {
    e.preventDefault();
    if (isMine) {
      navigate("/chatrooms/me", {
        state: {
          roomId: chatroomId,
          myUserId: profile.myUserId,
        },
      });
    }
  };

  return (
    <div className="chat-profile-card" onClick={handleClick}>
      <img
        src={profile?.profileImage || defaultImg}
        alt="profile"
        onClick={onClickImg}
      />
      <div className="chat-info">
        <p className="chat-username">{profile?.name}</p>
        <p className="chat-status">{profile?.statusMessage || "없음"}</p>
      </div>
      <div className="chat-right">
        {isMine ? (
          <button className="chat-button" onClick={handleMyChatClick}>
            나와의 채팅
          </button>
        ) : (
          <p className="chat-time">
            {" "}
            {profile.time ? formatTime(profile.time) : ""}{" "}
          </p>
        )}
      </div>
    </div>
  );
}
