// 채용 공고 페이지
// 사용자가 공고를 필터링하거나 검색어로 검색할 수 있으며,
// 회사 이메일이나 지원자 이메일로 특정 조건의 공고를 조회할 수 있는 기능

import React, { useState, useCallback, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import S from "../uis/JobUI";
import Header from "../components/Header";
import FilterGroup from "../components/Job/FilterGroup";
import JobPagination from "../components/Job/JobPagination";
import { AuthContext } from "../components/auth/AuthContext";

const Job = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { email } = useContext(AuthContext);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const location = useLocation();

  const fetchFilteredJobs = useCallback(
    async (filters) => {
      const url = filters
        ? `${API_URL}/api/job-posts/filter`
        : `${API_URL}/api/job-posts`;

      const options = filters
        ? {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify(filters),
          }
        : {
            headers: {
              "ngrok-skip-browser-warning": "69420",
            },
          };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const responseData = await response.json();
        setFilteredJobs(responseData?.data || []);
      } catch (error) {
        console.error("Failed to fetch: ", error);
      }
    },
    [API_URL]
  );

  const fetchJobsByApplicant = useCallback(
    async (applicantEmail) => {
      const url = `${API_URL}/api/job-applications/applied-jobs?email=${encodeURIComponent(
        applicantEmail
      )}`;

      try {
        const response = await fetch(url, {
          headers: { "ngrok-skip-browser-warning": "69420" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs by applicant");
        }
        const responseData = await response.json();
        setFilteredJobs(responseData?.data || []);
      } catch (error) {
        console.error("Failed to fetch jobs by applicant: ", error);
      }
    },
    [API_URL]
  );

  const fetchJobsByCompany = useCallback(
    async (companyEmail) => {
      const url = `${API_URL}/api/job-posts?email=${encodeURIComponent(
        companyEmail
      )}`;

      try {
        const response = await fetch(url, {
          headers: { "ngrok-skip-browser-warning": "69420" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs by company");
        }
        const responseData = await response.json();
        setFilteredJobs(responseData?.data || []);
      } catch (error) {
        console.error("Failed to fetch jobs by company: ", error);
      }
    },
    [API_URL]
  );

  const fetchJobsByKeyword = useCallback(
    async (keyword) => {
      const url = `${API_URL}/api/job-posts/search?keyword=${encodeURIComponent(
        keyword
      )}`;

      try {
        const response = await fetch(url, {
          headers: { "ngrok-skip-browser-warning": "69420" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch job data by keyword");
        }
        const responseData = await response.json();
        setFilteredJobs(responseData?.data || []);
      } catch (error) {
        console.error("Failed to fetch by keyword: ", error);
      }
    },
    [API_URL]
  );

  const handleFilterChange = useCallback(
    (filters) => {
      const {
        selectedWorkTerms = [],
        selectedDays = [],
        selectedTimes = [],
        selectedRegions = [],
        selectedOccupations = [],
        useTimeTable = false,
      } = filters;

      if (
        !selectedWorkTerms.length &&
        !selectedDays.length &&
        !selectedTimes.length &&
        !selectedRegions.length &&
        !selectedOccupations.length &&
        !useTimeTable
      ) {
        fetchFilteredJobs(null);
      } else {
        const requestPayload = {
          id: 0,
          email: email || "",
          workLocations: selectedRegions,
          workCategories: selectedOccupations,
          workTerms: selectedWorkTerms,
          workDays: selectedDays,
          workTimeCategory: selectedTimes,
          useTimeTable: useTimeTable,
        };

        fetchFilteredJobs(requestPayload);
      }
    },
    [email, fetchFilteredJobs]
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword");
    const applicantEmail = params.get("email");
    const companyEmail = params.get("companyEmail");

    if (applicantEmail) {
      fetchJobsByApplicant(applicantEmail);
    } else if (companyEmail) {
      fetchJobsByCompany(companyEmail);
    } else if (keyword) {
      fetchJobsByKeyword(keyword);
    } else {
      fetchFilteredJobs(null);
    }
  }, [
    location.search,
    fetchJobsByApplicant,
    fetchJobsByCompany,
    fetchJobsByKeyword,
    fetchFilteredJobs,
  ]);

  return (
    <>
      <Header />
      <S.PageFrame>
        <FilterGroup onFilterChange={handleFilterChange} />
        <JobPagination filteredJobs={filteredJobs} />
      </S.PageFrame>
    </>
  );
};

export default Job;
