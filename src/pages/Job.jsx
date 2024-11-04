import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MOCK_JobData from "../mock/mock-jobData";
import S from "../uis/JobUI";
import Header from "../components/Header";
import FilterGroup from "../components/Job/FilterGroup";
import JobTable from "../components/Job/JobTable";

const Job = () => {
  const [filteredJobs, setFilteredJobs] = useState(MOCK_JobData);
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/job/${id}`);

  const handleFilterChange = (filters) => {
    const {
      selectedWorkTerms,
      selectedDays,
      selectedTimes,
      selectedRegions,
      selectedOccupations,
    } = filters;

    const filtered = MOCK_JobData.filter((job) => {
      const matchesWorkTerms =
        !selectedWorkTerms.length || selectedWorkTerms.includes(job.workTerm);
      const matchesDays =
        !selectedDays.length ||
        selectedDays.some((day) => job.workDays.includes(day));
      const matchesTimes =
        !selectedTimes.length || selectedTimes.includes(job.workTime);
      const matchesRegions =
        !selectedRegions.length || selectedRegions.includes(job.location);
      const matchesOccupations =
        !selectedOccupations.length ||
        selectedOccupations.includes(job.workCategory);

      return (
        matchesWorkTerms &&
        matchesDays &&
        matchesTimes &&
        matchesRegions &&
        matchesOccupations
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <>
      <Header />
      <S.PageFrame>
        <FilterGroup onFilterChange={handleFilterChange} />
        <JobTable jobs={filteredJobs} onRowClick={handleClick} />
      </S.PageFrame>
    </>
  );
};

export default Job;
