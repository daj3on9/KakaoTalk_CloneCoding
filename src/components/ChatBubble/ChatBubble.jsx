import React from "react";
import { formatTime } from "../../utils/time";
import "./ChatBubble.css";

function ChatBubble({ style, data, time }) {
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
