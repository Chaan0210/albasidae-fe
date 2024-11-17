import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderRegist from "../components/HeaderRegist";
import styled from "styled-components";
import { AuthContext } from "../components/auth/AuthContext";

const S = {
  Wrapper: styled.div`
    background-color: #f8f8f8;
    padding-top: 50px;
    padding-bottom: 50px;
  `,
  Container: styled.div`
    background-color: #fff;
    max-width: 500px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0px auto;
    padding: 20px 35px 30px 35px;
    white-space: nowrap;
  `,
  Title: styled.div`
    font-size: 27px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0 30px 0;
  `,
  InfoRow: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 25px 5px;
  `,
  Label: styled.div`
    flex: 1;
    font-size: 16px;
    font-weight: bold;
  `,
  Input: styled.input`
    flex: 2;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    outline: none;
  `,
  TabWrapper: styled.div`
    flex: 2;
    display: flex;
  `,
  TabLeft: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabRight: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  EditButton: styled.button`
    width: 99%;
    padding: 15px;
    background-color: ${({ role }) =>
      role === "COMPANY" ? "#5194f6" : "#fdf25d"};
    border: ${({ role }) =>
      role === "COMPANY" ? "1px solid #2f6df6" : "1px solid #fae04b"};
    color: ${({ role }) => (role === "COMPANY" ? "white" : "black")};
    font-size: 18px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  ErrorMessage: styled.div`
    color: red;
    font-size: 14px;
    text-align: center;
    padding-bottom: 25px;
  `,
  SuccessMessage: styled.div`
    color: green;
    font-size: 14px;
    text-align: center;
    padding-bottom: 25px;
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  WithdrawButton: styled.button`
    width: 99%;
    padding: 15px;
    color: red;
    border: 2px solid red;
    border-radius: 10px;
    background-color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  `,
};

const UserInfoChange = () => {
  const navigate = useNavigate();
  const { isLoggedIn, email, role, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    birthDate: "",
    gender: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^[0-9]*$/.test(value)) {
      return;
    }
    if (name === "birthDate" && (!/^[0-9]*$/.test(value) || value.length > 6)) {
      return;
    }
    if (name === "password" && value.length > 15) {
      return;
    }
    if (name === "confirmPassword" && value.length > 15) {
      return;
    }
    if (name === "phone" && value.length > 11) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleGenderChange = (gender) => {
    setActiveTab(gender);
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender,
    }));
  };
  const handleSubmit = async () => {
    const { name, birthDate, gender, phone, password } = formData;
    setErrorMessage("");
    setSuccessMessage("");
    if (formData.phone.length !== 11) {
      setErrorMessage("유효한 전화번호를 입력하세요.");
      return;
    }
    if (password && password !== formData.confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (
      !name ||
      (formData.role === "PERSONAL" && (!birthDate || !gender)) ||
      !phone
    ) {
      setErrorMessage("모든 필드를 입력하세요.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("");

    const requestBody = {
      email: email,
      password: password || "",
      name: name,
      birthDate: birthDate,
      gender: gender,
      phone: phone,
      role: "PERSONAL",
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${encodeURIComponent(email)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          mode: "cors",
        }
      );

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("사용자 정보가 수정되었습니다.");
        navigate("/userinfochange");
      } else {
        setErrorMessage(result.message || "사용자 정보 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting user data: ", error);
      setErrorMessage("서버 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (email) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/api/users/${encodeURIComponent(email)}`
          );
          const data = await response.json();
          if (response.ok && data.result) {
            setFormData({
              role: data.data.role || "",
              name: data.data.name || "",
              birthDate: data.data.birthDate || "",
              gender: data.data.gender || "",
              phone: data.data.phone || "",
              password: "",
              confirmPassword: "",
            });
            setActiveTab(data.data.gender);
          } else {
            console.error("Fail to fetch : ", data.message);
          }
        } catch (error) {
          console.error("Error fetching user data : ", error);
        }
      };
      fetchUserData();
    }
  }, [isLoggedIn, navigate, email]);

  const handleDelete = async () => {
    const confirmation = window.confirm("정말로 회원 탈퇴를 하시겠습니까?");
    if (!confirmation) return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${encodeURIComponent(email)}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("회원 탈퇴 되었습니다.");
        logout();
        navigate("/");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to delete.");
      }
    } catch (error) {
      console.error("회원 탈퇴 중 오류 발생: ", error);
      setErrorMessage("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <>
      <HeaderRegist />
      <S.Wrapper>
        <S.Container>
          <S.Title>필수정보 변경</S.Title>
          <S.InfoRow>
            <S.Label>이메일(변경 불가)</S.Label>
            <S.Input
              type="text"
              value={email}
              style={{ backgroundColor: "#eee" }}
              readOnly
            />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>이름</S.Label>
            <S.Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
            />
          </S.InfoRow>
          {role === "PERSONAL" && (
            <>
              <S.InfoRow>
                <S.Label>생년월일</S.Label>
                <S.Input
                  type="text"
                  name="birthDate"
                  placeholder="생년월일(6자리)"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </S.InfoRow>
              <S.InfoRow>
                <S.Label>성별</S.Label>
                <S.TabWrapper>
                  <S.TabLeft
                    active={activeTab === "남"}
                    onClick={() => handleGenderChange("남")}
                  >
                    남
                  </S.TabLeft>
                  <S.TabRight
                    active={activeTab === "여"}
                    onClick={() => handleGenderChange("여")}
                  >
                    여
                  </S.TabRight>
                </S.TabWrapper>
              </S.InfoRow>
            </>
          )}

          <S.InfoRow>
            <S.Label>휴대폰</S.Label>
            <S.Input
              type="text"
              name="phone"
              placeholder="휴대폰 번호"
              value={formData.phone}
              onChange={handleChange}
            />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>수정 비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              placeholder="비밀번호(8~15자)"
              value={formData.password}
              onChange={handleChange}
            />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>비밀번호 재입력</S.Label>
            <S.Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 재입력"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </S.InfoRow>
          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          {successMessage && (
            <S.SuccessMessage>{successMessage}</S.SuccessMessage>
          )}
          <S.ButtonGroup>
            <S.EditButton role={role} onClick={handleSubmit}>
              수정완료
            </S.EditButton>
            <S.WithdrawButton onClick={handleDelete}>
              회원 탈퇴
            </S.WithdrawButton>
          </S.ButtonGroup>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default UserInfoChange;
