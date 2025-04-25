import React, { useMemo, memo } from "react";
import "./ChatRooms.css";
import { useName } from "../../store/useStore";
import ChatProfileCard from "../../components/ChatProfileCard/ChatProfileCard";
import { useChatRooms } from "../../hooks/useChatRooms";

function ChatRooms() {
  const userName = useName();
  const { myInfo, chatList } = useChatRooms();

  //  로딩 스피너 표시
  if (!myInfo) {
    return <div className="content-area">로딩 중…</div>;
  }

  // 컴포넌트 재렌더링 방지
  const ChatRoomItem = memo(function ChatRoomItem({ room }) {
    const profile = useMemo(
      () => ({
        name: room.other_user.name,
        myUserId: room.first_user_id,
        otherUserId: room.second_user_id,
        profileImage: room.other_user.profile_image_url,
        statusMessage: room.last_message?.content ?? "메시지 없음",
        time: room.last_message?.updated_at,
      }),
      [
        room.other_user.name,
        room.other_user.profile_image_url,
        room.last_message?.content,
        room.last_message?.updated_at,
      ]
    );

    return <ChatProfileCard profile={profile} chatroomId={room.id} />;
  });

  return (
    <>
      <div className="left-line"></div>
      <div className="content-area">
        <p>
          <span>{userName}</span> 님의 채팅
        </p>
        <ChatProfileCard
          profile={{
            name: myInfo.name,
            myUserId: myInfo.id,
            profileImage: myInfo.profile_image_url,
            statusMessage: myInfo.bio || "상태메세지 없음",
          }}
          chatroomId={myInfo.id}
          isMine
        />
        <div className="under-line"></div>
        <div className="chatRoom-list-area">
          {chatList.map((room) => (
            <ChatRoomItem key={room.id} room={room} chatroomId={room.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatRooms;
