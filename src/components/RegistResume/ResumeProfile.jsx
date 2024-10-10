import React from "react";
import mockData from "../../mock/mock-profile";
import S from "../../uis/RegistResumeUI";

const ResumeProfile = () => {
  const profile = mockData[0];

  return (
    <S.ProfileContainer>
      <S.ProfileImage>
        <img src={profile.picture} alt="Profile" />
      </S.ProfileImage>

      <S.ProfileInfo>
        <S.InfoRow>
          <S.Name>{profile.name}</S.Name>
          <S.InfoValue>{profile.gender}</S.InfoValue>
          <S.InfoValue>{profile.age}</S.InfoValue>

          <S.Link to="/userinfochange" className="link">
            <S.EditButton>회원정보 수정</S.EditButton>
          </S.Link>
        </S.InfoRow>

        <S.InfoRow>
          <S.InfoLabel>연락처</S.InfoLabel>
          <S.InfoValue>{profile.tel}</S.InfoValue>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>이메일</S.InfoLabel>
          <S.InfoValue>{profile.email}</S.InfoValue>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>주소</S.InfoLabel>
          <S.InfoValue>
            &nbsp; &nbsp;
            {profile.address.city} {profile.address.district}{" "}
            {profile.address.street} {profile.address.num}
          </S.InfoValue>
        </S.InfoRow>
      </S.ProfileInfo>
    </S.ProfileContainer>
  );
};
export default ResumeProfile;
