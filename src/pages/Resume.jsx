import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import S from "../uis/ResumeUI";
import Header from "../components/Header";
import ResumePagination from "../components/Resume/ResumePagination";

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        let response;
        if (email) {
          response = await fetch(
            `http://localhost:8080/api/resumes?email=${encodeURIComponent(
              email
            )}`
          );
        } else {
          response = await fetch(`http://localhost:8080/api/resumes`);
        }
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
  }, [email]);

  return (
    <>
      <Header />
      <S.PageFrame>
        <ResumePagination resumes={resumes} />
      </S.PageFrame>
    </>
  );
};

export default Resume;
