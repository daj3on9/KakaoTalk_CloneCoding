import React, { useEffect, useState } from "react";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import "./Chats.css";
import { useLocation, useNavigate } from "react-router-dom";
import { authGetAPI, authPostAPI } from "../../api/customAPI";

function Chats() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { roomId, otherUserName, myUserId, otherUserId } = state;

  const [messages, setMesseges] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isMine, setIsMine] = useState(true); // 채팅 보낼때 상태

  const roomKey = roomId === myUserId ? "me" : roomId;

  // 대화 내용 불러오기
  const fetchMessage = async () => {
    const response = await authGetAPI(`/chatrooms/${roomKey}/chats`);
    setMesseges(response);
    // console.log(response)
  };

  useEffect(() => {
    // console.log("state 상태 확인 : ", state);
    fetchMessage();
  }, []);

  // 뒤로가기
  const handleGoBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // 채팅 입력
  const handleChange = (e) => {
    e.preventDefault();
    setInputMessage(e.target.value);
  };

  // 채팅 보내기
  const handleSend = async () => {
    // 비었으면 무시하기
    if (!inputMessage.trim()) return;

    const data = {
      sender_id: isMine ? myUserId : otherUserId,
      content: inputMessage,
    };

    // 확인용 콘솔
    /*
    console.log("전송하는 데이터 : ", data);
    console.log("roomId : ", roomId);
    */

    const postMessage = await authPostAPI(`/chatrooms/${roomKey}/chats`, data);

    if (postMessage) {
      console.log("전송함 : ", postMessage);
      await fetchMessage();
    } else {
      alert("메세지 전송에 실패했습니다.");
    }

    setInputMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-back-button" onClick={handleGoBackClick}>
          {" "}
          &lt;{" "}
        </div>
        <div className="chat-user-name">
          {otherUserName ? otherUserName : "나와의 채팅"}
        </div>
        <div className="chat-header-placeholder" />
      </div>

      <div className="chat-messages">
        {messages.map((chat) => (
          <ChatBubble
            key={chat.id}
            style={chat.sender_id === myUserId ? "yes" : "no"}
            data={chat.content}
            time={chat.created_at}
          />
        ))}
      </div>

      <div className="chat-input-section">
        <div className="chat-sender-select">
          <label>
            <input
              type="radio"
              name="sender"
              checked={isMine}
              onChange={() => setIsMine(true)}
            />{" "}
            나
          </label>
          <label>
            <input
              type="radio"
              name="sender"
              checked={!isMine}
              onChange={() => setIsMine(false)}
              disabled={roomId === myUserId}
            />
            상대
          </label>
        </div>
        <div className="chat-textarea">
          <textarea
            placeholder="메세지 입력"
            onChange={handleChange}
            value={inputMessage}
          ></textarea>
        </div>
        <div className="chat-submit-button">
          <button onClick={handleSend} disabled={!inputMessage}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chats;
