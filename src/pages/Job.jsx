import React, { useEffect, useState } from "react";
import styled from "styled-components";

const jobData = [
  {
    id: 0,
    title: "올리브영 롯데백화점잠실점 금토일 마감 MATE 구인",
    companyName: "올리브영 롯데백화점잠실점",
    companyContent: "string",
    companyImage: "string",
    workCategory: "string",
    workType: "string",
    peopleNum: 0,
    career: "string",
    workTerm: "string",
    workDays: "string",
    workTime: "16:00 - 22:00",
    wageType: "시급",
    wage: "10,000",
    gender: "string",
    age: "string",
    deadline: "string",
    submitMethod: "string",
    location: "서울 강남구",
    posted: "2분 전",
    company: {
      id: 0,
      email: "string",
      name: "string",
      role: "PERSONAL",
    },
  },
  {
    id: 1,
    title: "[경성맥주 아차산점] '주방보조' 모집합니다(급구)",
    companyName: "달빞 경성맥주 아차산점",
    companyContent: "string",
    companyImage: "string",
    workCategory: "string",
    workType: "string",
    peopleNum: 0,
    career: "string",
    workTerm: "string",
    workDays: "string",
    workTime: "시간 협의",
    wageType: "시급",
    wage: "13,000",
    gender: "string",
    age: "string",
    deadline: "string",
    submitMethod: "string",
    location: "서울 광진구",
    posted: "2분 전",
    company: {
      id: 1,
      email: "string",
      name: "string",
      role: "PERSONAL",
    },
  },
  {
    id: 2,
    title: "[홈마트연산] 카운터 야간 직원모집",
    companyName: "홈마트연산",
    companyContent: "string",
    companyImage: "string",
    workCategory: "string",
    workType: "string",
    peopleNum: 0,
    career: "string",
    workTerm: "string",
    workDays: "string",
    workTime: "23:00 ~ 09:00",
    wageType: "월급",
    wage: "2,150,000",
    gender: "string",
    age: "string",
    deadline: "string",
    submitMethod: "string",
    location: "부산 연제구",
    posted: "2분 전",
    company: {
      id: 2,
      email: "string",
      name: "string",
      role: "PERSONAL",
    },
  },
];

const Container = styled.div`
  width: 100%;
  max-width: 1075px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FilterContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  margin-bottom: 2rem;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-wrap: nowrap;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin: 0;
  min-width: 80px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-grow: 1;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
  color: ${({ active }) => (active ? "white" : "#333")};
  background-color: ${({ active }) => (active ? "#333" : "white")};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#333" : "#f0f0f0")};
  }
`;

const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  appearance: none;
  color: #333;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5H7z"/></svg>')
    no-repeat right 10px center;
  background-size: 12px;

  &:hover {
    border-color: #555;
  }

  &focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  appearance: none;
  color: #333;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5H7z"/></svg>')
    no-repeat right 10px center;
  background-size: 12px;
  min-width: 130px;
  text-align: left;
`;

const FilterDetail = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableHeader = styled.th`
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const TableCellLeft = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

const TableCellCenter = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const CompanyName = styled.strong`
  display: block;
  color: #000000;
  font-weight: normal;
`;

const JobTitle = styled.p`
  margin: 0.5rem 0 0;
  color: #000000;
  font-weight: bold;
`;

const WageType = styled.span`
  display: block;
  font-weight: bold;
  color: ${(props) => {
    switch (props.wageType) {
      case "시급":
        return "purple";
      case "월급":
        return "red";
      case "연봉":
        return "green";
      default:
        return "black";
    }
  }};
  align-content: center;
`;

const Wage = styled.p`
  margin: 0.5rem 0 0;
  color: #000000;
  font-weight: normal;
  align-content: center;
`;

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 20;

  /*useEffect(() => {
        // API CALL
            .then(response) => {
                setJobs(response.data);
            })
            .catch((error) -=> {
                console.error('데이터를 가져오는데 실패했습니다.', error);
            });
    }, []);*/

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData; // jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePages = (newPage) => {
    setCurrentPage(newPage);
  };

  const [selectedWorkTerms, setSelectedWorkTerms] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const workTerms = [
    "1일",
    "1주일 이하",
    "1주일-1개월",
    "1개월-3개월",
    "3개월-6개월",
    "6개월-1년",
    "1년 이상",
  ];
  const days = [
    "평일(월,화,수,목,금)",
    "주말(토,일)",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const times = [
    "오전",
    "오전-오후",
    "오후",
    "오후-저녁",
    "저녁",
    "저녁-새벽",
    "새벽",
    "새벽-오전",
    "종일",
    "시간협의",
  ];

  const handleFilterClick = (type, value) => {
    if (type === "workTerm") {
      setSelectedWorkTerms(toggleSelection(selectedWorkTerms, value));
    }
    if (type === "days") {
      setSelectedDays(toggleSelection(selectedDays, value));
    }
    if (type === "time") {
      setSelectedTimes(toggleSelection(selectedTimes, value));
    }
  };

  const toggleSelection = (selectedArray, value) => {
    if (selectedArray.includes(value)) {
      return selectedArray.filter((item) => item !== value);
    } else {
      return [...selectedArray, value];
    }
  };

  const [region, setRegion] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workCondition, setWorkCondition] = useState(false);

  const handleRegionChange = (e) => setRegion(e.target.value);
  const handleOccupationChange = (e) => setOccupation(e.target.value);
  const toggleWorkCondition = () => setWorkCondition(!workCondition);

  const regions = ["휘경동", "전농동", "이문동", "답십리동", "청량리동"];
  const occupations = [
    "외식/음료",
    "유통/판매",
    "문화/여가/생활",
    "서비스",
    "사무/회계",
    "고객상담/영업/리서치",
    "생산/건설/노무",
    "IT/인터넷",
    "교육/강사",
    "디자인",
    "미디어",
    "운전/배달",
    "병원/간호/연구",
  ];

  return (
    <Container>
      <Title>오늘의 채용정보</Title>
      <FilterContainer>
        <FilterSection>
          <FilterGroup>
            <StyledSelect value={region} onChange={handleRegionChange}>
              <option value="">지역</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </StyledSelect>
            <StyledSelect value={occupation} onChange={handleOccupationChange}>
              <option value="">하는일</option>
              {occupations.map((occupation, index) => (
                <option key={index} value={occupation}>
                  {occupation}
                </option>
              ))}
            </StyledSelect>
            <StyledButton onClick={toggleWorkCondition}>근무조건</StyledButton>
            {workCondition && (
              <FilterDetail>
                <FilterSection>
                  <FilterTitle>근무기간</FilterTitle>
                  <FilterGroup>
                    {workTerms.map((term) => (
                      <FilterButton
                        key={term}
                        active={selectedWorkTerms.includes(term)}
                        onClick={() => handleFilterClick("workTerm", term)}
                      >
                        {term}
                      </FilterButton>
                    ))}
                  </FilterGroup>
                </FilterSection>
                <FilterSection>
                  <FilterTitle>근무요일</FilterTitle>
                  <FilterGroup>
                    {days.map((day) => (
                      <FilterButton
                        key={day}
                        active={selectedDays.includes(day)}
                        onClick={() => handleFilterClick("days", day)}
                      >
                        {day}
                      </FilterButton>
                    ))}
                  </FilterGroup>
                </FilterSection>
                <FilterSection>
                  <FilterTitle>근무시간</FilterTitle>
                  <FilterGroup>
                    {times.map((time) => (
                      <FilterButton
                        key={time}
                        active={selectedTimes.includes(time)}
                        onClick={() => handleFilterClick("time", time)}
                      >
                        {time}
                      </FilterButton>
                    ))}
                  </FilterGroup>
                </FilterSection>
              </FilterDetail>
            )}
          </FilterGroup>
        </FilterSection>
      </FilterContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>기업명 / 공고제목</TableHeader>
            <TableHeader>근무지</TableHeader>
            <TableHeader>근무시간</TableHeader>
            <TableHeader>급여</TableHeader>
            <TableHeader>등록일</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {currentJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCellLeft>
                <CompanyName>{job.companyName}</CompanyName>
                <JobTitle>{job.title}</JobTitle>
              </TableCellLeft>
              <TableCellCenter>{job.location}</TableCellCenter>
              <TableCellCenter>{job.workTime}</TableCellCenter>
              <TableCellCenter>
                <WageType wageType={job.wageType}>{job.wageType}</WageType>
                <Wage>{job.wage}</Wage>
              </TableCellCenter>
              <TableCellCenter>{job.posted}</TableCellCenter>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default JobList;
