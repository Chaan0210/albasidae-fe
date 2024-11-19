import React from "react";
import S from "../../uis/ResumeUI";

const calculateAge = (birthDate) => {
  if (birthDate && !isNaN(birthDate)) {
    const yearPrefix =
      parseInt(birthDate.slice(0, 2), 10) <= new Date().getFullYear() % 100
        ? 2000
        : 1900;
    const year = yearPrefix + parseInt(birthDate.slice(0, 2), 10);
    const month = parseInt(birthDate.slice(2, 4), 10) - 1;
    const day = parseInt(birthDate.slice(4, 6), 10);
    const birth = new Date(year, month, day);
    const ageDifMs = Date.now() - birth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return null;
};

const ResumeTable = ({ resumes, onRowClick }) => {
  return (
    <S.ResumeTable>
      <S.ResumeTableHead>
        <S.ResumeTableHeaderRow>
          <S.ResumeTableHeader>이름, 경력</S.ResumeTableHeader>
          <S.ResumeTableHeader>이력서 요약</S.ResumeTableHeader>
          <S.ResumeTableHeader>희망근무지역</S.ResumeTableHeader>
        </S.ResumeTableHeaderRow>
      </S.ResumeTableHead>
      <tbody>
        {resumes &&
          resumes.map((resume) => {
            const age = calculateAge(resume.personal?.birthDate);
            return (
              <S.ResumeTableRow
                key={resume.id}
                onClick={() => onRowClick(resume.id)}
              >
                <S.ResumeTableCenter>
                  <S.ResumeImage imageUrl={resume.personal?.image} />
                  <S.ResumeNameGenderAge>
                    {resume.personal?.name +
                      "(" +
                      resume.personal?.gender +
                      "," +
                      (age !== null ? `${age}세` : "N/A") +
                      ")"}
                  </S.ResumeNameGenderAge>
                  <S.ResumeCareer>{resume?.career}</S.ResumeCareer>
                </S.ResumeTableCenter>
                <S.ResumeTableLeft>
                  <S.ResumeTitle>{resume?.resumeTitle}</S.ResumeTitle>
                  <S.ResumeSummary>
                    {(resume?.employmentTypes).join(", ")}
                  </S.ResumeSummary>
                </S.ResumeTableLeft>
                <S.ResumeTableCenter>
                  <S.DesiredLocation>
                    {(resume?.preferredWorkLocation).join(", ")}
                  </S.DesiredLocation>
                </S.ResumeTableCenter>
              </S.ResumeTableRow>
            );
          })}
      </tbody>
    </S.ResumeTable>
  );
};

export default ResumeTable;