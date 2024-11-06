import React, { useState, useRef } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  `,
  Table: styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    border-radius: 10px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #ddd;
  `,
  Th: styled.th`
    font-size: 15px;
    user-select: none;
    color: #aaa;
    border: 1px solid #ddd;
    width: 67px;
    height: 23px;
    text-align: center;
    &:nth-child(1) {
      width: 25px;
    }
  `,
  Td: styled.td`
    border: 1px solid #ddd;
    width: 100px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? "#004094" : "white")};
  `,
  Button: styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  `,
};

const TimeTable = () => {
  const hours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [selectedCells, setSelectedCells] = useState([]);
  const isDragging = useRef(false);

  const toggleCell = (day, hour) => {
    const cell = `${day}-${hour}`;
    setSelectedCells((prevSelected) =>
      prevSelected.includes(cell)
        ? prevSelected.filter((c) => c !== cell)
        : [...prevSelected, cell]
    );
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseEnter = (day, hour) => {
    if (isDragging.current) {
      toggleCell(day, hour);
    }
  };

  const isSelected = (day, hour) => {
    return selectedCells.includes(`${day}-${hour}`);
  };

  return (
    <S.Wrapper>
      <S.Table onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <thead>
          <tr>
            <S.Th></S.Th>
            {days.map((day) => (
              <S.Th key={day}>{day}</S.Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <S.Th>{hour}</S.Th>
              {days.map((day) => (
                <S.Td
                  key={`${day}-${hour}`}
                  selected={isSelected(day, hour)}
                  onMouseDown={() => toggleCell(day, hour)}
                  onMouseEnter={() => handleMouseEnter(day, hour)}
                ></S.Td>
              ))}
            </tr>
          ))}
        </tbody>
      </S.Table>
      {/* <S.Button onClick={() => console.log(selectedCells)}>
        선택된 시간 출력
      </S.Button> */}
    </S.Wrapper>
  );
};

export default TimeTable;
