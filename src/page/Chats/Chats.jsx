import React from "react";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import "./Chats.css";

function Chats(props) {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-back-button"> &lt; </div>
        <div className="chat-user-name">상대방 이름</div>
        <div className="chat-header-placeholder" />
      </div>

      <div className="chat-messages">
        {dummy.map((chat) => (
          <ChatBubble
            key={chat.id}
            style={chat.sender_id === 42 ? "yes" : "no"}
            data={chat.content}
            time={chat.created_at}
          />
        ))}
      </div>

      <div className="chat-input-section">
        <div className="chat-sender-select">
          <label>
            <input type="radio" name="sender" value="me" /> 나
          </label>
          <label>
            <input type="radio" name="sender" value="other" />
            상대
          </label>
        </div>
        <div className="chat-textarea">
          <textarea placeholder="메세지 입력"></textarea>
        </div>
        <div className="chat-submit-button">
          <button>전송</button>
        </div>
      </div>
    </div>
  );
}

export default Chats;

// 더미데이터
const dummy = [
  {
    id: 78,
    chatroom_id: 15,
    sender_id: 42,
    content: "하이룽 방가방가",
    created_at: "2025-04-16T02:49:37.982Z",
    updated_at: "2025-04-16T02:49:37.982Z",
  },
  {
    id: 102,
    chatroom_id: 15,
    sender_id: 3,
    content: "방가방가뿡",
    created_at: "2025-04-23T07:13:31.974Z",
    updated_at: "2025-04-23T07:13:31.974Z",
  },
  {
    id: 79,
    chatroom_id: 15,
    sender_id: 42,
    content: "하이룽 방가방가",
    created_at: "2025-04-16T02:49:37.982Z",
    updated_at: "2025-04-16T02:49:37.982Z",
  },
  {
    id: 103,
    chatroom_id: 15,
    sender_id: 3,
    content: "방가방가뿡",
    created_at: "2025-04-23T07:13:31.974Z",
    updated_at: "2025-04-23T07:13:31.974Z",
  },
  {
    id: 80,
    chatroom_id: 15,
    sender_id: 42,
    content: "하이룽 방가방가",
    created_at: "2025-04-16T02:49:37.982Z",
    updated_at: "2025-04-16T02:49:37.982Z",
  },
  {
    id: 104,
    chatroom_id: 15,
    sender_id: 3,
    content: "방가방가뿡",
    created_at: "2025-04-23T07:13:31.974Z",
    updated_at: "2025-04-23T07:13:31.974Z",
  },
  {
    id: 81,
    chatroom_id: 15,
    sender_id: 42,
    content: "하이룽 방가방가",
    created_at: "2025-04-16T02:49:37.982Z",
    updated_at: "2025-04-16T02:49:37.982Z",
  },
  {
    id: 105,
    chatroom_id: 15,
    sender_id: 3,
    content: "방가방가뿡",
    created_at: "2025-04-23T07:13:31.974Z",
    updated_at: "2025-04-23T07:13:31.974Z",
  },
  {
    id: 82,
    chatroom_id: 15,
    sender_id: 42,
    content: "하이룽 방가방가",
    created_at: "2025-04-16T02:49:37.982Z",
    updated_at: "2025-04-16T02:49:37.982Z",
  },
  {
    id: 106,
    chatroom_id: 15,
    sender_id: 3,
    content: "방가방가뿡",
    created_at: "2025-04-23T07:13:31.974Z",
    updated_at: "2025-04-23T07:13:31.974Z",
  },
  {
    id: 83,
    chatroom_id: 15,
    sender_id: 42,
    content: "하이룽 방가방가",
    created_at: "2025-04-16T02:49:37.982Z",
    updated_at: "2025-04-16T02:49:37.982Z",
  },
  // {
  //   id: 107,
  //   chatroom_id: 15,
  //   sender_id: 3,
  //   content: "방가방가뿡",
  //   created_at: "2025-04-23T07:13:31.974Z",
  //   updated_at: "2025-04-23T07:13:31.974Z",
  // },
  // {
  //   id: 84,
  //   chatroom_id: 15,
  //   sender_id: 42,
  //   content: "하이룽 방가방가",
  //   created_at: "2025-04-16T02:49:37.982Z",
  //   updated_at: "2025-04-16T02:49:37.982Z",
  // },
  // {
  //   id: 108,
  //   chatroom_id: 15,
  //   sender_id: 3,
  //   content: "방가방가뿡",
  //   created_at: "2025-04-23T07:13:31.974Z",
  //   updated_at: "2025-04-23T07:13:31.974Z",
  // },
];
