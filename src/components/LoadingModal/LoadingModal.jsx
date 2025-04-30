import { useSelector } from "react-redux";
import "./LoadingModal.css";

export default function LoadingModal() {
  const loading = useSelector((state) => state.loading);

  if (!loading) return null;

  return (
    <div className="loading-modal-wrrapper">
      <div className="loading-modal-content">
        {" "}
        🕓 &nbsp; 잠시만 기다려주세요...{" "}
      </div>
    </div>
  );
}
