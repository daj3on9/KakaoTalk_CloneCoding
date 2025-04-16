# React + Reset API 이용 카카오톡 클론코딩

![미리보기](https://i.postimg.cc/Wp9ScTvq/image.png)

- [🔗 배포링크 바로가기](https://kakao-talk-clone-coding-smoky.vercel.app/)
- [👗 UI 디자인 바로가기](https://www.figma.com/design/Un7RLsm4nSxub3s8L78Ice/%EA%B5%AC%EB%A6%84?node-id=20-2&p=f&t=eD0muFxdS528tH4y-0)

<br>

## 🛠️ 사용 기술

**Frontend** : React, React Router, Redux Toolkit  
**상태 관리**: Redux + red ux-persist  
**API 통신**: Axios + custom API wrapper

## 📁 프로젝트 구조

```
src/
├── api/               # Axios 기반 API 호출 함수 (customAPI 등)
├── assets/            # 이미지, 아이콘 등 정적 리소스
├── components/        # 재사용 가능한 UI 컴포넌트
├── pages/             # 라우팅 되는 주요 페이지
├── store/             # Redux 상태 관리 및 슬라이스
└── App.jsx            # 루트 컴포넌트

```

## 💡 주요 기능

### [ 회원가입 ]

[📃 Register.jsx](https://github.com/daj3on9/KakaoTalk_CloneCoding/blob/main/src/page/auth/Register.jsx)
![회원가입 이미지](https://i.postimg.cc/VkwFj69T/image.png)

- 이메일, 비밀번호 입력으로 회원가입
- 회원 정보는 서버에 POST 요청으로 전송
- 가입 성공 시 바로 로그인 페이지로 이동
- 비밀번호 일치 확인
- 정규식으로 유효성 검사
  - 이메일 형식
  - 비밀번호는 최소 8자 이상, 특수문자 포함

### [ 로그인 ]

[📃 Login.jsx](https://github.com/daj3on9/KakaoTalk_CloneCoding/blob/main/src/page/auth/Register.jsx)
![title](https://i.postimg.cc/26LvpRFh/image.png)

- 이메일과 비밀번호로 로그인
- 사용자가 입력한 정보를 서버에 POST 요청으로 전송해 인증
- 로그인 성공 시 채팅방 목록 페이지로 이동
- Redux + redux-persist를 이용한 로그인 상태 유지
  - 로그인 성공 시 accessToken과 사용자 이름을 store에 저장

### [ 채팅 목록 ]

[📃 ChatRooms.jsx](https://github.com/daj3on9/KakaoTalk_CloneCoding/blob/main/src/page/ChatRooms/ChatRooms.jsx)
![title](https://i.postimg.cc/bJP8P11g/image.png)

- 현재 로그인된 유저의 이름을 상단에 표시
- 자신과의 채팅방 (나와의 채팅) 카드 표시
- 자신의 프로필 사진 클릭시 로 이동
- 상태 메시지와 기본 프로필 이미지 포함
- 다른 사용자와의 채팅방 목록 표시
- 각 카드에 상대방 이름, 프로필, 상태메시지, 최근 메시지 시간 표시

<br>

✅ **추가 구현 필요**

- [ ] 버튼 클릭 시 나와의 채팅방으로 이동
- [ ] 채팅방 목록에 스크롤 기능 추가

### [ 내 프로필 ]

[📃 MyProfile.jsx](https://github.com/daj3on9/KakaoTalk_CloneCoding/blob/main/src/page/MyProfile/MyProfile.jsx)
![내 프로필 페이지](https://i.postimg.cc/jS6Z9Ndt/image.png)

- 내 프로필 정보 조회
- 이름, 상태 메시지, 프로필 이미지 렌더링
- 프로필 편집 기능
- [프로필 편집] 버튼 클릭 시 input 창으로 전환되어 이름, 상태 메시지 수정 가능
- 값 입력 후 "저장하기" 버튼 클릭 시 서버에 PATCH 요청
- 입력값이 모두 비어있을 경우에는 요청을 보내지 않도록 조건 처리

<br>

✅ **추가 구현 필요**

- [ ] 이름이나 상태메세지 변경 성공시 `alert`창 추가
- [ ] 채팅 목록으로 되돌아가는 뒤로가기 버튼 추가

### [ 프로필 카드 컴포넌트 ]

[📃 ChatProfileCard.jsx](https://github.com/daj3on9/KakaoTalk_CloneCoding/blob/main/src/component/ChatProfileCard/ChatProfileCard.jsx)

![title](https://i.postimg.cc/4NWzh5dK/image.png)

- 사용자 카드 UI
- state = `me` 일 경우: 내 정보와 "나와의 채팅" 버튼 표시
- state = `me` 일 경우: 프로필 사진 클릭시 마이 프로필 페이지로 이동
- state = `other` 일 경우: 상대방 정보와 채팅 시간 표시

<br>

✅ **추가 구현 필요**

- [ ] 상대와의 채팅 클릭시 해당 채팅방으로 이동
- [ ] 상태 메세지 부분 말줄임표 기능 추가
