import React, { useState, useRef } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 60px;
    height: 20px;
    text-align: center;
    &:nth-child(1) {
      text-align: right;
      vertical-align: top;
      width: 15px;
    }
  `,
  Td: styled.td`
    border: 1px solid #ddd;
    width: 100px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? "#004094" : "white")};
  `,
  Button: styled.button`
    width: 100%;
    background-color: #fdf25d;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #fae04b;
    }
  `,
  DeleteButton: styled.button`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    border: 1px solid red;
    color: red;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #eee;
    }
  `,
};

const TimeTable = () => {
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
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

  const clearSelectedCells = () => {
    setSelectedCells([]);
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
      <S.DeleteButton onClick={clearSelectedCells}>모두 지우기</S.DeleteButton>
      <S.Button onClick={() => console.log(selectedCells)}>
        시간표 입력
      </S.Button>
    </S.Wrapper>
  );
};

export default TimeTable;
