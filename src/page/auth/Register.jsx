import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { postAPI } from "../../api/customAPI";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", //유효성 검사 즉시 반영
  });
  const navigate = useNavigate();

  // 비밀번호와 비밀번호 확인 비교용
  const password = watch("password");

  // 회원가입 API
  const onSubmit = async (data) => {
    const responseData = await postAPI("/signup", data);
    if (responseData) {
      alert("회원가입 성공! 로그인 창으로 이동합니다.");
      console.log("회원가입 응답 : ", responseData);
      navigate("/");
    } else {
      console.error("회원가입 요청 실패");
    }
  };

  return (
    <div className="register-container">
      <h1> kakao </h1>
      <div className="register-box">
        <div className="register-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="register-input-box">
              <input
                type="text"
                placeholder="이메일"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "올바른 이메일 형식을 입력해주세요.",
                  },
                })}
              />
              <input
                type="password"
                placeholder="비밀번호"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  pattern: {
                    value: /^(?=.*[!@#$%^&*]).{8,}$/,
                    message:
                      "비밀번호는 최소 8자 이상이며, !@#$%^&* 중 하나 이상의 특수문자를 포함해야 합니다.",
                  },
                })}
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                {...register("passwordCheck", {
                  required: "비밀번호 확인이 필요합니다.",
                  validate: (value) =>
                    value === password || "비밀번호가 일치하지 않습니다.",
                })}
              />
              <input
                type="text"
                placeholder="이름"
                {...register("name", {
                  required: "이름을 입력해주세요.",
                })}
              />
              <input
                type="tel"
                placeholder="전화번호"
                {...register("phoneNumber", {
                  required: "전화번호를 입력해주세요.",
                  pattern: {
                    value: /^010\d{7}$/,
                    message:
                      "전화번호는 010으로 시작하며 숫자 10자리여야 합니다.",
                  },
                })}
              />
            </div>

            <div className="button-box">
              <p>
                {errors.email?.message ||
                  errors.password?.message ||
                  errors.passwordCheck?.message ||
                  errors.nickname?.message ||
                  errors.phoneNumber?.message}
              </p>
              <button
                type="submit"
                style={{
                  backgroundColor: isValid ? "#423630" : "",
                  color: isValid ? "#fff" : "",
                }}
                disabled={!isValid}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
