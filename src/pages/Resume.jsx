import React, { useEffect, useState } from "react";
import S from "../uis/ResumeUI";
import Header from "../components/Header";
import ResumePagination from "../components/Resume/ResumePagination";

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/resumes`);
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
  }, []);
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
