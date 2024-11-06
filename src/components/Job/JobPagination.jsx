import React, { useState, useEffect } from "react";
import S from "../../uis/JobUI";
import JobTable from "./JobTable";
import { useNavigate } from "react-router-dom";

const jobsPerPage = 20;

const JobPagination = ({ filteredJobs }) => {
  const jobs = filteredJobs;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedJobs, setPaginatedJobs] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/job/${id}`);

  useEffect(() => {
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;

    setPaginatedJobs(jobs.slice(startIndex, endIndex));
  }, [currentPage, jobs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <S.PageFrame>
      <JobTable jobs={paginatedJobs} onRowClick={handleClick} />
      <S.PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </S.PaginationButton>
        ))}
      </S.PaginationContainer>
    </S.PageFrame>
  );
};

export default JobPagination;
