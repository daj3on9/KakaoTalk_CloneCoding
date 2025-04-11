import React from "react";
import "../css/ChatRooms.css";
import { useName } from "../store/useStore";

function ChatRooms() {
  const userName = useName();

  /*
  React.useEffect(() => {
    console.log(userName);
  }, [userName]);
  */

  return (
    <>
      <div className="left-line"></div>
      <div className="content-area">
        <p>
          <span>{userName}</span> 님의 채팅
        </p>
      </div>
    </>
  );
}

export default ChatRooms;
