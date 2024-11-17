import React from "react";
import S from "../uis/ResumeUI";
import Header from "../components/Header";
import ResumePagination from "../components/Resume/ResumePagination";
import MOCK_RESUME from "../mock/mock-resume";

const Resume = () => {
  return (
    <>
      <Header />
      <S.PageFrame>
        <ResumePagination resumes={MOCK_RESUME} />
      </S.PageFrame>
    </>
  );
};

export default Resume;
