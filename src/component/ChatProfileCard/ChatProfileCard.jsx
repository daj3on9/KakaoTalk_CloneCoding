import React from "react";
import defaultImg from "../../assets/default.png";
import "./ChatProfileCard.css";
import { useNavigate } from "react-router-dom";

function ChatProfileCard({ data, state }) {
  const navigate = useNavigate();
  const profile = state === "me" ? data : data?.other_user;

  // 시간 포맷팅
  const formatTime = (isoString) => {
    const date = new Date(isoString);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  // 프로필 사진 클릭 시 내 프로필로 이동
  const onClickImg = (e) => {
    e.preventDefault();
    if (profile) {
      navigate("/myProfile");
    }
  };

  return (
    <div className="chat-profile-card">
      <img
        src={profile?.profile_image_url || defaultImg}
        alt="profile"
        onClick={onClickImg}
      />
      <div className="chat-info">
        <p className="chat-username">{profile?.name}</p>
        <p className="chat-status">{profile?.bio || "상태메시지 없음"}</p>
      </div>
      {state === "me" ? (
        <button className="chat-button">나와의 채팅</button>
      ) : (
        <p className="chat-time"> {formatTime(profile.updated_at)} </p>
      )}
    </div>
  );
}

export default React.memo(ChatProfileCard);
