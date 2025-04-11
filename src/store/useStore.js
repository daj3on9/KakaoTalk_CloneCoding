import { useSelector } from "react-redux";

// 토큰 가져오기
export const useToken = () => {
  const token = useSelector((state) => state.token.accessToken);
  return token ? token : null;
};

// 사용자 이름 가져오기
export const useName = () => {
  const name = useSelector((state) => state.user.userName);
  return name ? name : null;
};
