import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/ProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";
import TimeTable from "../components/Profile/TimeTable";
import { AuthContext } from "../components/auth/AuthContext";

const PersonalProfile = () => {
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "PERSONAL" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
    const fetchResumeData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/resumes?${encodeURIComponent(email)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const responseData = await response.json();
        const data = responseData?.data || [];
        setResumes(data);
      } catch (error) {
        console.error("Fail to fetch: ", error);
      }
    };
    fetchResumeData();
  }, [isLoggedIn, role, navigate, email]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleResumeClick = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.TopWrapper>
          <S.Left>
            <S.TopLeft>
              <S.ProfileContainer>
                <UserInfo />
              </S.ProfileContainer>

              <S.ContentWrapper>
                <S.ContentLeft>
                  <S.ContentContainer onClick={() => handleNavigate("/job")}>
                    <S.AlgorithmIcon />
                    맞춤알바
                  </S.ContentContainer>
                  <S.ContentContainer onClick={() => handleNavigate("/")}>
                    <S.PaperPlaneIcon />
                    입사지원현황
                  </S.ContentContainer>
                </S.ContentLeft>
                <S.ContentRight>
                  <S.ContentContainer onClick={() => handleNavigate("/resume")}>
                    <S.GlassesIcon />
                    이력서열람
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.UOSLogo />
                  </S.ContentContainer>
                </S.ContentRight>
              </S.ContentWrapper>
            </S.TopLeft>
            <S.BottomContainer>
              <S.MainTitle>내 이력서</S.MainTitle>
              {resumes.length > 0 ? (
                resumes.map((resume) => (
                  <S.ResumeList
                    key={resume.id}
                    onClick={() => handleResumeClick(resume.id)}
                  >
                    <S.ResumeTitle>제목 : {resume.resumeTitle}</S.ResumeTitle>
                    <S.ResumeDetails>
                      희망근무지: {resume?.preferredWorkLocation.join(", ")} |
                      희망업직종: {resume?.employmentTypes.join(", ")}
                    </S.ResumeDetails>
                  </S.ResumeList>
                ))
              ) : (
                <div>등록된 이력서가 없습니다.</div>
              )}
            </S.BottomContainer>
            <S.BottomContainer>
              <S.MainTitle>지원현황</S.MainTitle>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </S.BottomContainer>
          </S.Left>

          <S.RightContainer>
            <TimeTable />
          </S.RightContainer>
        </S.TopWrapper>
      </S.Wrapper>
    </>
  );
};

export default PersonalProfile;
