import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import ChatRooms from "./page/ChatRooms/ChatRooms";
import MyProfile from "./page/MyProfile/MyProfile";
import Chats from "./page/Chats/Chats";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myProfile" element={<MyProfile />} />
      <Route path="/chatRooms" element={<ChatRooms />} />
      <Route path="/chatRooms/me" element={<Chats />} />
      <Route path="/chatRooms/:id/chats" element={<Chats />} />
    </Routes>
  );
}
