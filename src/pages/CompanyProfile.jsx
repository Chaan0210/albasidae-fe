import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/CompanyProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";
import { AuthContext } from "../components/auth/AuthContext";

const CompanyProfile = () => {
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [applicantCounts, setApplicantCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "COMPANY" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
    const fetchJobData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/job-posts?email=${encodeURIComponent(
            email
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const responseData = await response.json();
        const data = responseData?.data || [];
        setJobs(data);

        data.forEach(async (job) => {
          try {
            const applicantResponse = await fetch(
              `http://localhost:8080/api/job-applications/applications/${job.id}`
            );
            if (!applicantResponse.ok) {
              throw new Error("Failed to fetch applicant data");
            }
            const applicantData = await applicantResponse.json();
            setApplicantCounts((prevCounts) => ({
              ...prevCounts,
              [job.id]: applicantData?.data?.totalApplicants || 0,
            }));
          } catch (error) {
            console.error("Fail to fetch applicant count: ", error);
          }
        });
      } catch (error) {
        console.error("Fail to fetch: ", error);
      }
    };
    fetchJobData();
  }, [isLoggedIn, role, navigate, email]);

  const handleNavigate = (path) => {
    if (path === "/job") {
      navigate(`${path}?companyEmail=${encodeURIComponent(email)}`);
    } else {
      navigate(path);
    }
  };

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Container>
          <S.TopComponent>
            <S.ProfileContainer>
              <UserInfo />
            </S.ProfileContainer>

            <S.ContentContainer onClick={() => handleNavigate("/job")}>
              <S.PaperPlaneIcon />
              공고지원현황
            </S.ContentContainer>
            <S.ContentContainer onClick={() => handleNavigate("/resume")}>
              <S.GlassesIcon />
              이력서 둘러보기
            </S.ContentContainer>
          </S.TopComponent>

          <S.BottomContainer>
            <S.MainTitle>내 공고목록</S.MainTitle>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <S.JobList key={job.id} onClick={() => handleJobClick(job.id)}>
                  <S.JobTitle>공고제목: {job.title}</S.JobTitle>
                  <S.JobDetails>
                    회사 이름: {job.title} | 마감기한 : {job.deadline}
                  </S.JobDetails>
                  <S.JobDetailNumber>
                    지원자 수: {applicantCounts[job.id] || 0}
                  </S.JobDetailNumber>
                </S.JobList>
              ))
            ) : (
              <div>등록된 공고가 없습니다.</div>
            )}
          </S.BottomContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CompanyProfile;
