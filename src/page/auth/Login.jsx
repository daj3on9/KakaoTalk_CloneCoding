import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/auth/Login.css";
import logo from "../../assets/logo.png";
import { useUsers } from "../../hooks/useUser";

function Login() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const users = useUsers();

  const handleSubmit = (e) => {
    // console.log(users);
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // 로그인 성공
      alert("로그인 성공");
    } else {
      // 로그인 실패
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="카톡 로고" />
      <div className="login-input-box">
        <input type="text" placeholder="카카오계정(이메일)" />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={password ? "login-btn active" : "login-btn"}
        disabled={!password}
        onClick={handleSubmit}
      >
        로그인
      </button>
      <Link to="/register">이메일로 가입하기</Link>
    </div>
  );
}

export default Login;
