import S from "../../uis/JobUI";

const JobTable = ({ jobs, onRowClick }) => (
  <S.JobTable>
    <S.JobTableHead>
      <S.JobTableHeaderRow>
        <S.JobTableHeader>기업명 / 공고제목</S.JobTableHeader>
        <S.JobTableHeader>근무지</S.JobTableHeader>
        <S.JobTableHeader>근무시간</S.JobTableHeader>
        <S.JobTableHeader>급여</S.JobTableHeader>
        <S.JobTableHeader>등록일</S.JobTableHeader>
      </S.JobTableHeaderRow>
    </S.JobTableHead>
    <tbody>
      {jobs.map((job) => (
        <S.JobTableRow key={job.id} onClick={() => onRowClick(job.id)}>
          <S.JobTableLeft>
            <S.CompanyName>{job.companyName}</S.CompanyName>
            <S.JobTitle>{job.title}</S.JobTitle>
          </S.JobTableLeft>
          <S.JobTableCenter>
            {job.location.split(" ")[0] + " " + job.location.split(" ")[1]}
          </S.JobTableCenter>
          <S.JobTableCenter>{job.workTime}</S.JobTableCenter>
          <S.JobTableCenter>
            <S.WageType wageType={job.wageType}>{job.wageType}</S.WageType>
            <S.Wage>{job.wage}</S.Wage>
          </S.JobTableCenter>
          <S.JobTableCenter>{job.posted}</S.JobTableCenter>
        </S.JobTableRow>
      ))}
    </tbody>
  </S.JobTable>
);

export default JobTable;
