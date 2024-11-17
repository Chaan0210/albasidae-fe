import React, { useState, useEffect } from "react";
import S from "../../uis/ResumeUI";
import ResumeTable from "./ResumeTable";
import { useNavigate } from "react-router-dom";

const resumesPerPage = 10;

const ResumePagination = ({ resumes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedResumes, setPaginatedResumes] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/resume/${id}`);

  useEffect(() => {
    const startIndex = (currentPage - 1) * resumesPerPage;
    const endIndex = startIndex + resumesPerPage;

    setPaginatedResumes(resumes.slice(startIndex, endIndex));
  }, [currentPage, resumes]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(resumes.length / resumesPerPage);

  return (
    <S.PageFrame>
      <ResumeTable resumes={paginatedResumes} onRowClick={handleClick} />
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

export default ResumePagination;
