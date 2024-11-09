import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mockData from "../../mock/mock-profile";
import S from "../../uis/RegistUI";
import { AuthContext } from "../auth/AuthContext";

const ResumeProfile = () => {
  const navigate = useNavigate();
  const profile = mockData[0];
  const { isLoggedIn, email, role } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else if (email) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/api/users/${encodeURIComponent(email)}`
          );
          const data = await response.json();
          if (response.ok && data.result) {
            const formattedPhone = data.data.phone.replace(
              /(\d{3})(\d{4})(\d{4})/,
              "$1-$2-$3"
            );
            setUserData({ ...data.data, phone: formattedPhone });

            const birthDate = data.data.birthDate;
            if (birthDate && !isNaN(birthDate)) {
              const yearPrefix =
                parseInt(birthDate.slice(0, 2), 10) <=
                new Date().getFullYear() % 100
                  ? 2000
                  : 1900;
              const year = yearPrefix + parseInt(birthDate.slice(0, 2), 10);
              const month = parseInt(birthDate.slice(2, 4), 10) - 1;
              const day = parseInt(birthDate.slice(4, 6), 10);
              const birth = new Date(year, month, day);
              const ageDifMs = Date.now() - birth.getTime();
              const ageDate = new Date(ageDifMs);
              setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
            }
          } else {
            console.error("Fail to fetch : ", data.message);
          }
        } catch (error) {
          console.error("Error fetching user data : ", error);
        }
      };
      fetchUserData();
    }
  }, [isLoggedIn, navigate, email]);

  return (
    <S.ProfileContainer>
      <S.ProfileImage>
        <img src={profile.picture} alt="Profile" />
      </S.ProfileImage>

      <S.ProfileInfo>
        <S.InfoRow>
          <S.Name>{userData?.name}</S.Name>
          {role === "PERSONAL" && (
            <S.InfoValue>({userData?.gender})</S.InfoValue>
          )}
          <S.InfoValue>{age !== null ? `${age + 1}세` : ""}</S.InfoValue>
          <S.Link to="/userinfochange" className="link">
            <S.EditButton>회원정보 수정</S.EditButton>
          </S.Link>
        </S.InfoRow>

        <S.InfoRow>
          <S.InfoLabel>연락처</S.InfoLabel>
          <S.InfoValue>{userData?.phone}</S.InfoValue>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>이메일</S.InfoLabel>
          <S.InfoValue>{userData?.email}</S.InfoValue>
        </S.InfoRow>
      </S.ProfileInfo>
    </S.ProfileContainer>
  );
};

export default ResumeProfile;
