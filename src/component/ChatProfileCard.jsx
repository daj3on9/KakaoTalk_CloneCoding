import React from "react";
import defaultImg from "../assets/default.png";
import "../css/component/ChatProfileCard.css";

function ChatProfileCard({ data, state }) {
  return (
    <div className="chat-profile-card">
      <img src={data?.profile_image_url || defaultImg} alt="profile" />
      <div className="chat-info">
        <p className="chat-username">{data?.name}</p>
        <p className="chat-status">{data?.bio || "상태메시지 없음"}</p>
      </div>
      {state === "me" ? (
        <button className="chat-button">나와의 채팅</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ChatProfileCard;
