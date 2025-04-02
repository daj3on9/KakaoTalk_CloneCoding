import React from "react";
import "../../css/auth/Login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="카톡 로고" />
      <div className="login-input-box">
        <input type="text" placeholder="카카오계정(이메일)" />
        <input type="password" placeholder="비밀번호" />
      </div>
      <button type="submit">로그인</button>
    </div>
  );
}

export default Login;
