// 받은 구인 정보 목록을 테이블 형태로 표시

import S from "../../uis/JobUI";

const JobTable = ({ jobs, onRowClick }) => {
  const processedJobs = jobs.map((job) => {
    const [wageType, ...wageParts] = job.pay.split(" ");
    const wage = wageParts.join(" ");
    return {
      ...job,
      wageType,
      wage,
    };
  });
  return (
    <S.JobTable>
      <S.JobTableHead>
        <S.JobTableHeaderRow>
          <S.JobTableHeader>기업명 / 공고제목</S.JobTableHeader>
          <S.JobTableHeader>근무지</S.JobTableHeader>
          <S.JobTableHeader>근무시간</S.JobTableHeader>
          <S.JobTableHeader>급여</S.JobTableHeader>
          <S.JobTableHeader>마감일</S.JobTableHeader>
        </S.JobTableHeaderRow>
      </S.JobTableHead>
      <tbody>
        {processedJobs.map((job) => (
          <S.JobTableRow key={job.id} onClick={() => onRowClick(job.id)}>
            <S.JobTableLeft>
              <S.CompanyName>{job.companyName}</S.CompanyName>
              <S.JobTitle>{job.title}</S.JobTitle>
            </S.JobTableLeft>
            <S.JobTableCenter>{job.place}</S.JobTableCenter>
            <S.JobTableCenter>
              {job.workTime === "any" ? "시간협의" : `${job.workTime}시`}
            </S.JobTableCenter>
            <S.JobTableCenter>
              <S.WageType wageType={job.wageType}>{job.wageType}</S.WageType>
              <S.Wage>{job.wage}</S.Wage>
            </S.JobTableCenter>
            <S.JobTableCenter>{job.deadline}</S.JobTableCenter>
          </S.JobTableRow>
        ))}
      </tbody>
    </S.JobTable>
  );
};

export default JobTable;
