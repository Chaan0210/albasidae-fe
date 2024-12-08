import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import S from "../uis/AdminUI";
import { AuthContext } from "../components/auth/AuthContext";

const AdminDashboard = () => {
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
    const fetchData = async () => {
      try {
        const usersResponse = await fetch("http://localhost:8080/api/users");
        const resumesResponse = await fetch(
          "http://localhost:8080/api/resumes"
        );
        const jobPostsResponse = await fetch(
          "http://localhost:8080/api/job-posts"
        );

        if (!usersResponse.ok || !resumesResponse.ok || !jobPostsResponse.ok) {
          throw new Error("Failed to fetch data.");
        }

        const usersData = await usersResponse.json();
        const resumesData = await resumesResponse.json();
        const jobPostsData = await jobPostsResponse.json();

        setUsers(usersData?.data || []);
        setResumes(resumesData?.data || []);
        setJobPosts(jobPostsData?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("데이터를 가져오는 중 오류가 발생했습니다.");
      }
    };

    fetchData();
  }, [isLoggedIn, role, navigate]);

  const deleteUser = async (userEmail) => {
    if (!window.confirm("정말로 사용자를 삭제하시겠습니까?")) return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${encodeURIComponent(userEmail)}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete user.");
      }
      const data = await response.json();
      if (data.result) {
        alert("사용자가 성공적으로 삭제되었습니다.");
        setUsers(users.filter((user) => user.email !== userEmail));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const deleteResume = async (resumeId, userEmail) => {
    if (!window.confirm("정말로 이력서를 삭제하시겠습니까?")) return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/resumes/${resumeId}?email=${encodeURIComponent(
          userEmail
        )}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete resume.");
      }
      const data = await response.json();
      if (data.result) {
        alert("이력서가 성공적으로 삭제되었습니다.");
        setResumes(resumes.filter((resume) => resume.id !== resumeId));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  const deleteJobPost = async (jobPostId, userEmail) => {
    if (!window.confirm("정말로 공고를 삭제하시겠습니까?")) return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/job-posts/${jobPostId}?email=${encodeURIComponent(
          userEmail
        )}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete job post.");
      }
      const data = await response.json();
      if (data.result) {
        alert("공고가 성공적으로 삭제되었습니다.");
        setJobPosts(jobPosts.filter((job) => job.id !== jobPostId));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting job post:", error);
    }
  };

  const handleResumeClick = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleJobPostClick = (jobPostId) => {
    navigate(`/job/${jobPostId}`);
  };

  return (
    <>
      <Header />
      <S.AdminContainer>
        <S.MainTitle>관리자 대시보드</S.MainTitle>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        <S.Section>
          <S.SectionTitle>사용자 목록</S.SectionTitle>
          {users.length > 0 ? (
            users.map((user) => (
              <S.UserCard key={user.email}>
                <S.UserInfo>
                  <S.UserLabel>이메일:</S.UserLabel>
                  <S.UserContent>{user.email}</S.UserContent>
                </S.UserInfo>
                <S.DeleteButton onClick={() => deleteUser(user.email)}>
                  사용자 삭제
                </S.DeleteButton>
              </S.UserCard>
            ))
          ) : (
            <div>등록된 사용자가 없습니다.</div>
          )}
        </S.Section>

        <S.Section>
          <S.SectionTitle>이력서 목록</S.SectionTitle>
          {resumes.length > 0 ? (
            resumes.map((resume) => (
              <S.ResumeCard
                key={resume.id}
                onClick={() => handleResumeClick(resume.id)}
              >
                <S.ResumeInfo>
                  <S.ResumeLabel>이력서 제목: </S.ResumeLabel>
                  <S.ResumeContent>{resume.resumeTitle}</S.ResumeContent>
                </S.ResumeInfo>
                <S.DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteResume(resume.id, email);
                  }}
                >
                  이력서 삭제
                </S.DeleteButton>
              </S.ResumeCard>
            ))
          ) : (
            <div>등록된 이력서가 없습니다.</div>
          )}
        </S.Section>

        <S.Section>
          <S.SectionTitle>알바 공고 목록</S.SectionTitle>
          {jobPosts.length > 0 ? (
            jobPosts.map((job) => (
              <S.JobCard
                key={job.id}
                onClick={() => handleJobPostClick(job.id)}
              >
                <S.JobInfo>
                  <S.JobLabel>공고 제목:</S.JobLabel>
                  <S.JobContent>{job.title}</S.JobContent>
                </S.JobInfo>
                <S.DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteJobPost(job.id, email);
                  }}
                >
                  공고 삭제
                </S.DeleteButton>
              </S.JobCard>
            ))
          ) : (
            <div>등록된 공고가 없습니다.</div>
          )}
        </S.Section>
      </S.AdminContainer>
    </>
  );
};

export default AdminDashboard;
