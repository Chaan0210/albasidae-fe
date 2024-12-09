import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import S from "../../uis/SignupUI";
import { AuthContext } from "../../components/auth/AuthContext";

const PersonalSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    birthDate: "",
    phone: "",
    gender: "",
  });
  const [activeTab, setActiveTab] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

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
    setFormData({
      ...formData,
      gender,
    });
  };
  const handleSubmit = async () => {
    if (Object.values(formData).some((field) => field === "")) {
      setErrorMessage("모든 필드를 입력해주세요.");
      return;
    }

    if (formData.phone.length !== 11) {
      setErrorMessage("유효한 전화번호를 입력하세요.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    const requestBody = {
      email: formData.email,
      password: formData.password,
      role: "PERSONAL",
      name: formData.name,
      birthDate: formData.birthDate,
      phone: formData.phone,
      businessNumber: null,
      gender: formData.gender,
    };

    try {
      const response = await fetch(
        // `https://6153-211-178-236-156.ngrok-free.app/api/users/register`,
        "https://ee9a-222-109-143-220.ngrok-free.app/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          mode: "cors",
        }
      );
      const data = await response.json();
      if (response.ok && data.result === true) {
        signup(data.data.token, "PERSONAL", formData.email);
        navigate("/");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <HeaderSignUp />

      <S.Container>
        <S.Title>개인회원가입</S.Title>

        <S.InputWrapper>
          <S.Input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />

          <S.DoubleWrapper>
            <S.InputFirst
              type="password"
              name="password"
              placeholder="비밀번호(8~15자)"
              value={formData.password}
              onChange={handleChange}
            />
            <S.InputSecond
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 재입력"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </S.DoubleWrapper>

          <S.Input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="birthDate"
            placeholder="생년월일(6자리)"
            value={formData.birthDate}
            onChange={handleChange}
          />
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
          <S.Input
            type="text"
            name="phone"
            placeholder="휴대폰 번호"
            value={formData.phone}
            onChange={handleChange}
          />
        </S.InputWrapper>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Button onClick={handleSubmit}>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default PersonalSignUp;
