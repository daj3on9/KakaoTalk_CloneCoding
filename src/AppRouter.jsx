import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./page/auth/login";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
