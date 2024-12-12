// 개인 회원 프로필 페이지
// 사용자가 자신의 이력서를 관리하고,
// 지원한 알바 목록을 확인하며,
// 타임테이블을 등록하고 관리할 수 있는 기능

import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/ProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";
import TimeTable from "../components/Profile/TimeTable";
import { AuthContext } from "../components/auth/AuthContext";
import AlbasidaeLogo from "../images/AlbasidaeLogo(A_Type).png";

const PersonalProfile = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
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
          `${API_URL}/api/resumes?email=${encodeURIComponent(email)}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "69420",
            },
          }
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

    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/job-applications/applied-jobs?email=${encodeURIComponent(
            email
          )}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch applied jobs data");
        }
        const responseData = await response.json();
        const data = responseData?.data || [];
        setAppliedJobs(data);
      } catch (error) {
        console.error("Fail to fetch applied jobs: ", error);
      }
    };

    fetchResumeData();
    fetchAppliedJobs();
  }, [isLoggedIn, role, navigate, email, API_URL]);

  const handleNavigate = (path, query = null) => {
    if (query) {
      navigate(`${path}?${query}`);
    } else {
      navigate(path);
    }
  };

  const handleResumeClick = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
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
                  <S.ContentContainer
                    onClick={() =>
                      handleNavigate(
                        "/job",
                        `email=${encodeURIComponent(email)}`
                      )
                    }
                  >
                    <S.PaperPlaneIcon />
                    입사지원현황
                  </S.ContentContainer>
                </S.ContentLeft>
                <S.ContentRight>
                  <S.ContentContainer
                    onClick={() =>
                      handleNavigate(
                        "/resume",
                        `email=${encodeURIComponent(email)}`
                      )
                    }
                  >
                    <S.GlassesIcon />
                    이력서열람
                  </S.ContentContainer>
                  <S.ContentContainer onClick={() => handleNavigate("/")}>
                    <S.AlbasidaeLogo src={AlbasidaeLogo} alt="Logo" />
                  </S.ContentContainer>
                </S.ContentRight>
              </S.ContentWrapper>
            </S.TopLeft>
            <S.BottomContainer>
              <S.MainTitle>내 이력서</S.MainTitle>
              {resumes.length > 0 ? (
                resumes.map((resume) => (
                  <S.AppliedJobList
                    key={resume.id}
                    onClick={() => handleResumeClick(resume.id)}
                  >
                    <S.AppliedJobTitle>
                      이력서 제목: {resume.resumeTitle}
                    </S.AppliedJobTitle>
                    <S.AppliedJobDetails>
                      희망근무지: {resume?.preferredWorkLocation.join(", ")} |
                      희망업직종: {resume?.employmentTypes.join(", ")}
                    </S.AppliedJobDetails>
                  </S.AppliedJobList>
                ))
              ) : (
                <div>등록된 이력서가 없습니다.</div>
              )}
            </S.BottomContainer>
            <S.BottomContainer>
              <S.MainTitle>지원한 알바 목록</S.MainTitle>
              {appliedJobs.length > 0 ? (
                appliedJobs.map((job) => (
                  <S.AppliedJobList
                    key={job.id}
                    onClick={() => handleJobClick(job.id)}
                  >
                    <S.AppliedJobTitle>공고제목: {job.title}</S.AppliedJobTitle>
                    <S.AppliedJobDetails>
                      회사명: {job.companyName}
                    </S.AppliedJobDetails>
                  </S.AppliedJobList>
                ))
              ) : (
                <div>지원한 알바가 없습니다.</div>
              )}
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
