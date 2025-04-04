import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";

// 회원가입 시 사용자 정보 등록
export function useRegisterUser() {
  const dispatch = useDispatch();
  return (userData) => dispatch(registerUser(userData));
}

// store에 저장된 모든 사용자 정보 리턴
export function useUsers() {
  return useSelector((state) => state.user.users);
}
