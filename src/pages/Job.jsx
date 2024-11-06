import React, { useState, useCallback, useEffect } from "react";
import S from "../uis/JobUI";
import Header from "../components/Header";
import FilterGroup from "../components/Job/FilterGroup";
import JobPagination from "../components/Job/JobPagination";

const Job = () => {
  const [jobs, setJobs] = useState([]); // 초기 데이터를 저장
  const [filteredJobs, setFilteredJobs] = useState([]); // 필터링된 데이터를 저장

  const handleFilterChange = useCallback(
    (filters) => {
      const {
        selectedWorkTerms,
        selectedDays,
        selectedTimes,
        selectedRegions,
        selectedOccupations,
      } = filters;

      const filtered = jobs.filter((job) => {
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
    },
    [jobs]
  );

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/job-posts`);
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const responseData = await response.json();
        const data = responseData?.data || [];

        if (Array.isArray(data)) {
          const jobsWithDefaults = data.map((job) => ({
            ...job,
            workDays: job.workDays || [],
            workTerm: job.workTerm || "",
            location: job.location || "",
            workCategory: job.workCategory || "",
          }));

          setJobs(jobsWithDefaults);
          setFilteredJobs(jobsWithDefaults);
        } else {
          throw new Error("Expected data to be an array");
        }
      } catch (error) {
        console.error("Fail to fetch: ", error);
      }
    };
    fetchJobData();
  }, []);

  return (
    <>
      <Header />
      <S.PageFrame>
        <FilterGroup onFilterChange={handleFilterChange} />
        {/* <JobTable jobs={filteredJobs} onRowClick={handleClick} /> */}
        <JobPagination filteredJobs={filteredJobs} />
      </S.PageFrame>
    </>
  );
};

export default Job;
