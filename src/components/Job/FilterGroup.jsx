import React, { useState, useEffect } from "react";
import S from "../../uis/JobUI";

const FilterGroup = ({ onFilterChange }) => {
  const [selectedWorkTerms, setSelectedWorkTerms] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [regionCondition, setRegionCondition] = useState(false);
  const [occupationCondition, setOccupationCondition] = useState(false);
  const [workCondition, setWorkCondition] = useState(false);

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

  const toggleSelection = (selectedArray, setSelected, value) => {
    const updatedSelection = selectedArray.includes(value)
      ? selectedArray.filter((item) => item !== value)
      : [...selectedArray, value];
    setSelected(updatedSelection);
  };

  useEffect(() => {
    onFilterChange({
      selectedWorkTerms,
      selectedDays,
      selectedTimes,
      selectedRegions,
      selectedOccupations,
    });
  }, [
    selectedWorkTerms,
    selectedDays,
    selectedTimes,
    selectedRegions,
    selectedOccupations,
    onFilterChange,
  ]);

  const handleRegionToggle = () => {
    setRegionCondition(!regionCondition);
    setOccupationCondition(false);
    setWorkCondition(false);
  };

  const handleOccupationToggle = () => {
    setOccupationCondition(!occupationCondition);
    setRegionCondition(false);
    setWorkCondition(false);
  };

  const handleWorkToggle = () => {
    setWorkCondition(!workCondition);
    setRegionCondition(false);
    setOccupationCondition(false);
  };

  return (
    <S.FilterContainer>
      <S.FilterSection>
        <S.FilterGroup>
          <S.StyledButton onClick={handleRegionToggle}>지역</S.StyledButton>
          <S.StyledButton onClick={handleOccupationToggle}>
            하는일
          </S.StyledButton>
          <S.StyledButton onClick={handleWorkToggle}>근무조건</S.StyledButton>

          {regionCondition && (
            <S.FilterBox>
              <S.FilterSection>
                <S.FilterTitle>지역</S.FilterTitle>
                <S.FilterGroup>
                  {regions.map((region) => (
                    <S.FilterButton
                      key={region}
                      active={selectedRegions.includes(region)}
                      onClick={() =>
                        toggleSelection(
                          selectedRegions,
                          setSelectedRegions,
                          region
                        )
                      }
                    >
                      {region}
                    </S.FilterButton>
                  ))}
                </S.FilterGroup>
              </S.FilterSection>
            </S.FilterBox>
          )}

          {occupationCondition && (
            <S.FilterBox>
              <S.FilterSection>
                <S.FilterTitle>하는일</S.FilterTitle>
                <S.FilterGroup>
                  {occupations.map((occupation) => (
                    <S.FilterButton
                      key={occupation}
                      active={selectedOccupations.includes(occupation)}
                      onClick={() =>
                        toggleSelection(
                          selectedOccupations,
                          setSelectedOccupations,
                          occupation
                        )
                      }
                    >
                      {occupation}
                    </S.FilterButton>
                  ))}
                </S.FilterGroup>
              </S.FilterSection>
            </S.FilterBox>
          )}

          {workCondition && (
            <S.FilterBox>
              <S.FilterSection>
                <S.FilterTitle>근무기간</S.FilterTitle>
                <S.FilterGroup>
                  {workTerms.map((term) => (
                    <S.FilterButton
                      key={term}
                      active={selectedWorkTerms.includes(term)}
                      onClick={() =>
                        toggleSelection(
                          selectedWorkTerms,
                          setSelectedWorkTerms,
                          term
                        )
                      }
                    >
                      {term}
                    </S.FilterButton>
                  ))}
                </S.FilterGroup>
              </S.FilterSection>
              <S.FilterSection>
                <S.FilterTitle>근무요일</S.FilterTitle>
                <S.FilterGroup>
                  {days.map((day) => (
                    <S.FilterButton
                      key={day}
                      active={selectedDays.includes(day)}
                      onClick={() =>
                        toggleSelection(selectedDays, setSelectedDays, day)
                      }
                    >
                      {day}
                    </S.FilterButton>
                  ))}
                </S.FilterGroup>
              </S.FilterSection>
              <S.FilterSection>
                <S.FilterTitle>근무시간</S.FilterTitle>
                <S.FilterGroup>
                  {times.map((time) => (
                    <S.FilterButton
                      key={time}
                      active={selectedTimes.includes(time)}
                      onClick={() =>
                        toggleSelection(selectedTimes, setSelectedTimes, time)
                      }
                    >
                      {time}
                    </S.FilterButton>
                  ))}
                </S.FilterGroup>
              </S.FilterSection>
            </S.FilterBox>
          )}
        </S.FilterGroup>
      </S.FilterSection>
    </S.FilterContainer>
  );
};

export default FilterGroup;
