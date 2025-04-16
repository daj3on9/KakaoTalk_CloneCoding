import React, { useEffect, useState } from "react";
import defaultImg from "../../assets/default.png";
import { authGetAPI, patchAPI } from "../../api/customAPI";
import "./MyProfile.css";

function MyProfile() {
  const [myInfo, setMyInfo] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editInfo, setEditInfo] = useState({
    name: "",
    bio: "",
  });

  useEffect(() => {
    getMyInfo();
  }, []);

  // 내 정보 불러오기
  const getMyInfo = async () => {
    const responseData = await authGetAPI("/users/me");
    if (responseData) {
      setMyInfo(responseData);
    } else {
      console.error("내 정보 불러오기 실패");
    }
  };

  // 내 프로필 편집 상태 변경 && 변경 API 요청
  const handleEditMode = async () => {
    const valueCheck =
      editInfo.name.trim() !== "" || editInfo.bio.trim() !== "";

    if (editMode && valueCheck) {
      const updateData = await patchAPI("/users/me", editInfo);
      if (updateData) setMyInfo(updateData);
    }

    setEditMode((prev) => !prev);
    setEditInfo({ name: "", bio: "" });
  };

  // 이름, 상태메세지 변경하기
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="my-profile-contianer">
      <div className="upper-space"></div>
      <div className="my-profile-box">
        <img src={myInfo?.profile_image_url || defaultImg} alt="profile" />
        <div className="my-profile-txt">
          {editMode ? (
            <>
              <input
                name="name"
                value={editInfo.name}
                onChange={handleEditChange}
                placeholder={myInfo?.name}
                style={{ fontSize: "24px" }}
              />
              <input
                name="bio"
                value={editInfo.bio}
                onChange={handleEditChange}
                placeholder={myInfo?.bio}
                style={{ fontSize: "16px" }}
              />
            </>
          ) : (
            <>
              <p className="my-profile-name">{myInfo?.name}</p>
              <p className="my-profile-bio">
                {myInfo?.bio || "상태메시지 없음"}
              </p>
            </>
          )}
        </div>
        <div className="button-box">
          <button disabled={editMode}> 나와의 채팅 </button>
          <button onClick={handleEditMode}>
            {" "}
            {editMode ? "저장하기" : "프로필 편집"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
