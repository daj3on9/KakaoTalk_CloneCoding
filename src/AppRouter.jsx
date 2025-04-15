import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import ChatRooms from "./page/ChatRooms";
import MyProfile from "./page/MyProfile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chatRooms" element={<ChatRooms />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Routes>
  );
}
