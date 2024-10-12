import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import S from "../../uis/SignupUI";
import { AuthContext } from "../../components/auth/AutContext";

const CompanySignUp = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    birthDate: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const requestBody = {
      email: formData.email,
      password: formData.password,
      role: "COMPANY",
      name: "",
      birthDate: "",
      phone: formData.phone,
      businessNumber: formData.businessnum,
    };

    try {
      const response = await fetch(
        `https://6153-211-178-236-156.ngrok-free.app/api/users/register`,
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
        alert("회원가입이 완료되었습니다.");
        login(data.data.token, "COMPANY");
        navigate("/");
      } else {
        alert(data.message);
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
        <S.Title>기업회원가입</S.Title>
        <S.InputWrapper>
          <S.InputButton>
            <S.Certify>
              본인명의 휴대폰으로 인증 가능
              <br />
              (아직 구현 안함)
            </S.Certify>
            <S.CertifyButton>인증하기</S.CertifyButton>
          </S.InputButton>
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
              placeholder="비밀번호 (8~15자)"
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
            type="email"
            name="businessnum"
            placeholder="사업자번호"
            value={formData.businessnum}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.CompanyButton onClick={handleSubmit}>가입하기</S.CompanyButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompanySignUp;
