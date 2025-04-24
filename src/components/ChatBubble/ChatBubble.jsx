import React from "react";
import "./ChatBubble.css";

function ChatBubble({ style, data, time }) {
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
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
