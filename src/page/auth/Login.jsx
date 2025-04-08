import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/auth/Login.css";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { postAPI } from "../../api/customAPI";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    console.log("login data : ", data);
    const responseData = await postAPI("/signin", data);
    if (responseData) {
      alert("로그인 성공");
      console.log("로그인 성공:", responseData);
      // navigate("/");
    } else {
      console.error("로그인 실패");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="카톡 로고" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-input-box">
          <input
            type="text"
            placeholder="카카오계정(이메일)"
            {...register("email", { required: "이메일을 입력해주세요." })}
          />

          <input
            type="password"
            placeholder="비밀번호"
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
        </div>

        <p className="error-message">
          {errors.email?.message || errors.password?.message}
        </p>
        <button
          type="submit"
          className={isValid ? "login-btn active" : "login-btn"}
          disabled={!isValid}
        >
          로그인
        </button>

        <Link to="/register">이메일로 가입하기</Link>
      </form>
    </div>
  );
}

export default Login;
