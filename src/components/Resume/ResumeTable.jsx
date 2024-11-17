import S from "../../uis/ResumeUI";

const ResumeTable = ({ resumes, onRowClick }) => (
  <S.ResumeTable>
    <S.ResumeTableHead>
      <S.ResumeTableHeaderRow>
        <S.ResumeTableHeader>이름 • 경력</S.ResumeTableHeader>
        <S.ResumeTableHeader>이력서 요약</S.ResumeTableHeader>
        <S.ResumeTableHeader>희망근무지역</S.ResumeTableHeader>
      </S.ResumeTableHeaderRow>
    </S.ResumeTableHead>
    <tbody>
      {resumes &&
        resumes.map((resume) => (
          <S.ResumeTableRow
            key={resume.id}
            onClick={() => onRowClick(resume.id)}
          >
            <S.ResumeTableCenter>
              <S.ResumeImage imageUrl={resume.image} />
              <S.ResumeNameGenderAge>
                {resume.user.name +
                  "(" +
                  resume.user.gender +
                  "," +
                  resume.user.age +
                  "세)"}
              </S.ResumeNameGenderAge>
              <S.ResumeCareer>{resume.career}</S.ResumeCareer>
            </S.ResumeTableCenter>
            <S.ResumeTableLeft>
              <S.ResumeTitle>{resume.resumeTitle}</S.ResumeTitle>
              <S.ResumeSummary>{resume.employmentTypes}</S.ResumeSummary>
            </S.ResumeTableLeft>
            <S.ResumeTableCenter>
              <S.DesiredLocation>
                {resume.preferredWorkLocation}
              </S.DesiredLocation>
            </S.ResumeTableCenter>
          </S.ResumeTableRow>
        ))}
    </tbody>
  </S.ResumeTable>
);

export default ResumeTable;
