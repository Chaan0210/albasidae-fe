import React, { useState, useEffect } from "react";
import S from "../../uis/JobUI";

const FilterGroup = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    selectedWorkTerms: [],
    selectedDays: [],
    selectedTimes: [],
    selectedRegions: [],
    selectedOccupations: [],
  });
  const [activeFilters, setActiveFilters] = useState({
    region: false,
    occupation: false,
    work: false,
  });

  const filterOptions = {
    workTerms: [
      "1일",
      "1주일 이하",
      "1주일-1개월",
      "1개월-3개월",
      "3개월-6개월",
      "6개월-1년",
      "1년 이상",
    ],
    days: [
      "평일(월,화,수,목,금)",
      "주말(토,일)",
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
    ],
  };

  const toggleSelection = (filterKey, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedSelection = prevFilters[filterKey].includes(value)
        ? prevFilters[filterKey].filter((item) => item !== value)
        : [...prevFilters[filterKey], value];
      return {
        ...prevFilters,
        [filterKey]: updatedSelection,
      };
    });
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  const handleFilterToggle = (filter) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const renderFilterButtons = (filterKey, options) => (
    <S.FilterGroup>
      {options.map((option) => (
        <S.FilterButton
          key={option}
          active={selectedFilters[filterKey].includes(option)}
          onClick={() => toggleSelection(filterKey, option)}
        >
          {option}
        </S.FilterButton>
      ))}
    </S.FilterGroup>
  );

  return (
    <S.FilterContainer>
      <S.FilterSection>
        <S.FilterGroup>
          <S.StyledButton onClick={() => handleFilterToggle("region")}>
            지역
          </S.StyledButton>
          <S.StyledButton onClick={() => handleFilterToggle("occupation")}>
            하는일
          </S.StyledButton>
          <S.StyledButton onClick={() => handleFilterToggle("work")}>
            근무조건
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
