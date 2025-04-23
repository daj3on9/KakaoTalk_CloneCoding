import React from "react";
import "./ChatBubble.css";

function ChatBubble({ style, data, time }) {
  const formatTime = (isoString) => {
    return new Date(isoString).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`chat-bubble-wrapper ${style}`}>
      {style === "yes" && (
        <span className="chat-time left">{formatTime(time)}</span>
      )}
      <div className="chat-bubble">{data}</div>
      {style === "no" && (
        <span className="chat-time right">{formatTime(time)}</span>
      )}
    </div>
  );
}

export default ChatBubble;
