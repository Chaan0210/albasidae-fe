import React, { useContext, useState } from "react";
import HeaderLogin from "../../components/auth/HeaderLogin";
import S from "../../uis/LoginUI";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/auth/AuthContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    const role = "ADMIN";
    const requestBody = {
      email,
      password,
      role,
    };
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        mode: "cors",
      });

      const data = await response.json();
      if (response.ok && data.result === true) {
        login(data.data.token, role, email);
        navigate("/admindashboard");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <S.Wrapper>
      <HeaderLogin />
      <S.Container>
        <S.Title>관리자 로그인</S.Title>
        <p></p>
        <S.InputWrapper>
          <S.Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <S.Input
            type="password"
            placeholder="비밀번호"
            value={password}
            maxLength="15"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </S.InputWrapper>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.LoginButton activeTab="admin" onClick={handleLogin}>
          관리자 로그인
        </S.LoginButton>
        <p></p>
      </S.Container>
    </S.Wrapper>
  );
};

export default AdminLogin;
