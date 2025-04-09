import { useSelector } from "react-redux";

// 토큰 가져오기
export const useToken = () => {
  const token = useSelector((state) => state.token.accessToken);
  return token ? token : null;
};
