import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { postAPI } from "../../api/customAPI";
import { setToken } from "../../store/tokenSlice";
import { setUserName } from "../../store/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const responseData = await postAPI("/signin", data);
    if (responseData) {
      alert(`${responseData.user.name}님 환영합니다!`);
      /*
      * 콘솔 확인
      console.log("로그인 성공:", responseData);
      console.log("token : ", responseData.accessToken);
      */
      dispatch(setToken(responseData.accessToken)); // store에 토큰 저장
      dispatch(setUserName(responseData.user.name)); // store에 이름 저장
      navigate("/chatRooms");
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
