import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "../../hooks/useUser";
import "../../css/auth/Register.css";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", //유효성 검사 즉시 반영
  });

  const registerUserHook = useRegisterUser();

  // 비밀번호와 비밀번호 확인 비교용
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    registerUserHook(data);
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
                placeholder="닉네임"
                {...register("nickname", {
                  required: "닉네임을 입력해주세요.",
                })}
              />
            </div>

            <div className="button-box">
              <p>
                {errors.email?.message ||
                  errors.password?.message ||
                  errors.passwordCheck?.message ||
                  errors.nickname?.message}
              </p>
              <button
                type="submit"
                style={{
                  backgroundColor: isValid ? "#423630" : "",
                  color: isValid ? "#fff" : "",
                }}
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
