import React from "react";
import defaultImg from "../../assets/default.png";
import "./ChatProfileCard.css";
import { useNavigate } from "react-router-dom";

function ChatProfileCard({ profile, onClick }) {
  const navigate = useNavigate();

  // 프로필 사진 클릭 시 내 프로필로 이동
  const onClickImg = (e) => {
    e.preventDefault();
    if (profile.isMine) {
      navigate("/myProfile");
    }
  };

  return (
    <div className="chat-profile-card" onClick={onClick}>
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
        {profile.isMine ? (
          <button className="chat-button" onClick={onClick}>
            나와의 채팅
          </button>
        ) : (
          <p className="chat-time"> {profile.time} </p>
        )}
      </div>
    </div>
  );
}

export default React.memo(ChatProfileCard);
