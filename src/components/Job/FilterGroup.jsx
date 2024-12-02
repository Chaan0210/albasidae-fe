import React, { useState, useContext } from "react";
import S from "../../uis/JobUI";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const FilterGroup = ({ onFilterChange }) => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useContext(AuthContext);
  const [selectedFilters, setSelectedFilters] = useState({
    selectedWorkTerms: [],
    selectedDays: [],
    selectedTimes: [],
    selectedRegions: [],
    selectedOccupations: [],
    useTimeTable: false,
  });
  const [activeFilters, setActiveFilters] = useState({
    region: false,
    occupation: false,
    work: false,
  });

  const filterOptions = {
    workTerms: [
      "3개월 이하",
      "3개월~6개월",
      "6개월~1년",
      "1년 이상",
      "기간 무관",
    ],
    days: [
      "평일",
      "주말",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
    times: [
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
    ],
    regions: ["휘경동", "전농동", "이문동", "답십리동", "청량리동"],
    occupations: [
      "외식, 음료",
      "유통, 판매",
      "문화, 여가, 생활",
      "서비스",
      "사무, 회계",
      "고객상담, 영업, 리서치",
      "생산, 건설, 노무",
      "IT, 인터넷",
      "교육, 강사",
      "디자인",
      "미디어",
      "운전, 배달",
      "병원, 간호, 연구",
    ],
  };

  const workTermMapping = {
    "3개월 이하": "under_three_month",
    "3개월~6개월": "three_six_month",
    "6개월~1년": "six_one_year",
    "1년 이상": "over_one_year",
    "기간 무관": "regardless",
  };

  const toggleSelection = (filterKey, value) => {
    setSelectedFilters((prevFilters) => {
      let updatedValue = value;
      let updatedSelection = [];
      if (filterKey === "selectedDays") {
        if (value === "평일") {
          const weekdays = ["월요일", "화요일", "수요일", "목요일", "금요일"];
          updatedSelection = prevFilters[filterKey].some((day) =>
            weekdays.includes(day)
          )
            ? prevFilters[filterKey].filter((day) => !weekdays.includes(day))
            : [...prevFilters[filterKey], ...weekdays];
        } else if (value === "주말") {
          const weekends = ["토요일", "일요일"];
          updatedSelection = prevFilters[filterKey].some((day) =>
            weekends.includes(day)
          )
            ? prevFilters[filterKey].filter((day) => !weekends.includes(day))
            : [...prevFilters[filterKey], ...weekends];
        } else {
          updatedSelection = prevFilters[filterKey].includes(value)
            ? prevFilters[filterKey].filter((item) => item !== value)
            : [...prevFilters[filterKey], value];
        }
      } else {
        if (filterKey === "selectedWorkTerms" && workTermMapping[value]) {
          updatedValue = workTermMapping[value];
        }

        updatedSelection = prevFilters[filterKey].includes(updatedValue)
          ? prevFilters[filterKey].filter((item) => item !== updatedValue)
          : [...prevFilters[filterKey], updatedValue];
      }

      const updatedFilters = {
        ...prevFilters,
        [filterKey]: updatedSelection,
      };

      onFilterChange(updatedFilters);

      return updatedFilters;
    });
  };

  const toggleTimeTableFilter = () => {
    if (!isLoggedIn) {
      alert("시간표 맞춤 필터 기능을 사용하기 위해 로그인 해주세요.");
      navigate("/login");
      return;
    } else if (role !== "PERSONAL" && role !== "ADMIN") {
      alert("기업회원은 이 기능을 사용할 수 없습니다.");
      navigate("/");
      return;
    }

    setSelectedFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        useTimeTable: !prevFilters.useTimeTable,
      };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleFilterToggle = (filter) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const renderFilterButtons = (filterKey, options) => (
    <S.FilterGroup>
      {options.map((option) => {
        const isActive =
          filterKey === "selectedWorkTerms"
            ? selectedFilters[filterKey]?.includes(workTermMapping[option]) ??
              false
            : selectedFilters[filterKey]?.includes(option) ?? false;

        return (
          <S.FilterButton
            key={option}
            active={isActive}
            onClick={() => toggleSelection(filterKey, option)}
          >
            {option}
          </S.FilterButton>
        );
      })}
    </S.FilterGroup>
  );

  return (
    <S.FilterContainer>
      <S.FilterSection>
        <S.FilterGroup>
          <S.StyledButton
            active={activeFilters.region}
            onClick={() => handleFilterToggle("region")}
          >
            지역
          </S.StyledButton>
          <S.StyledButton
            active={activeFilters.occupation}
            onClick={() => handleFilterToggle("occupation")}
          >
            하는일
          </S.StyledButton>
          <S.StyledButton
            active={activeFilters.work}
            onClick={() => handleFilterToggle("work")}
          >
            근무조건
          </S.StyledButton>

          <S.StyledButton
            active={selectedFilters.useTimeTable}
            onClick={toggleTimeTableFilter}
          >
            시간표 맞춤 필터
          </S.StyledButton>

          {activeFilters.region && (
            <S.FilterBox>
              <S.FilterSection>
                <S.FilterTitle>지역</S.FilterTitle>
                {renderFilterButtons("selectedRegions", filterOptions.regions)}
              </S.FilterSection>
            </S.FilterBox>
          )}

          {activeFilters.occupation && (
            <S.FilterBox>
              <S.FilterSection>
                <S.FilterTitle>하는일</S.FilterTitle>
                {renderFilterButtons(
                  "selectedOccupations",
                  filterOptions.occupations
                )}
              </S.FilterSection>
            </S.FilterBox>
          )}

          {activeFilters.work && (
            <S.FilterBox>
              <S.FilterSection>
                <S.FilterTitle>근무기간</S.FilterTitle>
                {renderFilterButtons(
                  "selectedWorkTerms",
                  filterOptions.workTerms
                )}
              </S.FilterSection>
              <S.FilterSection>
                <S.FilterTitle>근무요일</S.FilterTitle>
                {renderFilterButtons("selectedDays", filterOptions.days)}
              </S.FilterSection>
              <S.FilterSection>
                <S.FilterTitle>근무시간</S.FilterTitle>
                {renderFilterButtons("selectedTimes", filterOptions.times)}
              </S.FilterSection>
            </S.FilterBox>
          )}
        </S.FilterGroup>
      </S.FilterSection>
    </S.FilterContainer>
  );
};

export default FilterGroup;
