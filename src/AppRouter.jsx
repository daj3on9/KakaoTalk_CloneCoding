import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./page/auth/login";
import Register from "./page/auth/Register";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
