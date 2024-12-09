import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../auth/AuthContext";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TableTitle: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  TableDescription: styled.div`
    font-size: 12px;
    color: #bbb;
    margin-bottom: 5px;
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
  const { email } = useContext(AuthContext);
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [selectedCells, setSelectedCells] = useState([]);
  const [isExisting, setIsExisting] = useState(false);
  const isDragging = useRef(false);

  useEffect(() => {
    const fetchTimeTable = async () => {
      try {
        const response = await fetch(
          `https://ee9a-222-109-143-220.ngrok-free.app/api/timetable/${encodeURIComponent(
            email
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch timetable data");
        }
        const responseData = await response.json();
        const data = responseData?.data;

        if (data) {
          setIsExisting(true);
          const preSelectedCells = [];
          if (data.monday) {
            data.monday.split(", ").forEach((hour) => {
              preSelectedCells.push(`월-${hour}`);
            });
          }
          if (data.tuesday) {
            data.tuesday.split(", ").forEach((hour) => {
              preSelectedCells.push(`화-${hour}`);
            });
          }
          if (data.wednesday) {
            data.wednesday.split(", ").forEach((hour) => {
              preSelectedCells.push(`수-${hour}`);
            });
          }
          if (data.thursday) {
            data.thursday.split(", ").forEach((hour) => {
              preSelectedCells.push(`목-${hour}`);
            });
          }
          if (data.friday) {
            data.friday.split(", ").forEach((hour) => {
              preSelectedCells.push(`금-${hour}`);
            });
          }
          if (data.saturday) {
            data.saturday.split(", ").forEach((hour) => {
              preSelectedCells.push(`토-${hour}`);
            });
          }
          if (data.sunday) {
            data.sunday.split(", ").forEach((hour) => {
              preSelectedCells.push(`일-${hour}`);
            });
          }
          setSelectedCells(preSelectedCells);
        }
      } catch (error) {
        console.error("Failed to fetch timetable data: ", error);
      }
    };
    fetchTimeTable();
  }, [email]);

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

  const handleSubmit = async () => {
    const timetable = {
      email: email,
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      registered: true,
    };

    selectedCells.forEach((cell) => {
      const [day, hour] = cell.split("-");
      switch (day) {
        case "월":
          timetable.monday.push(hour);
          break;
        case "화":
          timetable.tuesday.push(hour);
          break;
        case "수":
          timetable.wednesday.push(hour);
          break;
        case "목":
          timetable.thursday.push(hour);
          break;
        case "금":
          timetable.friday.push(hour);
          break;
        case "토":
          timetable.saturday.push(hour);
          break;
        case "일":
          timetable.sunday.push(hour);
          break;
        default:
          break;
      }
    });

    timetable.monday = timetable.monday.join(", ");
    timetable.tuesday = timetable.tuesday.join(", ");
    timetable.wednesday = timetable.wednesday.join(", ");
    timetable.thursday = timetable.thursday.join(", ");
    timetable.friday = timetable.friday.join(", ");
    timetable.saturday = timetable.saturday.join(", ");
    timetable.sunday = timetable.sunday.join(", ");

    try {
      const method = isExisting ? "PUT" : "POST";
      const response = await fetch(
        `https://ee9a-222-109-143-220.ngrok-free.app/api/timetable/${encodeURIComponent(
          email
        )}`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(timetable),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register timetable");
      }
      alert("시간표가 성공적으로 등록되었습니다!");
    } catch (error) {
      console.log(timetable);

      console.error("Failed to submit timetable: ", error);
      alert("시간표 등록에 실패했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.TableTitle>시간표</S.TableTitle>
      <S.TableDescription>
        자신의 학교 시간표나 일정을 클릭 또는 드래그를 통해 입력해주세요.
        <br /> 이 시간을 제외한 알바를 추천해드려요!
      </S.TableDescription>
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
      <S.Button onClick={handleSubmit}>시간표 입력</S.Button>
    </S.Wrapper>
  );
};

export default TimeTable;
