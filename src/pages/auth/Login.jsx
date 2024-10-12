import React, { useState } from "react";
import HeaderLogin from "../../components/auth/HeaderLogin";
import S from "../../uis/LoginUI";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const role = activeTab === "personal" ? "PERSONAL" : "COMPANY";
    const requestBody = {
      email,
      password,
      role,
    };
    try {
      const response = await fetch(
        "https://6153-211-178-236-156.ngrok-free.app/api/users/login",
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
        alert("로그인 성공");
        navigate("/");
        localStorage.setItem("token", data.data.token);
        navigate("/");
      } else {
        console.error("서버 응답:", data);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <HeaderLogin />
      <S.Container>
        <S.Title>로그인 후 다양한 서비스를 이용해 보세요.</S.Title>
        <S.SubText>
          아직 알바시대 회원이 아니시라면, 지금 <a href="/signup">회원가입</a>을
          해주세요.
        </S.SubText>

        <S.TabWrapper>
          <S.TabLeft
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          >
            개인회원 <br />
            (일자리 찾기)
          </S.TabLeft>
          <S.TabRight
            active={activeTab === "company"}
            onClick={() => setActiveTab("company")}
          >
            기업회원 <br />
            (알바생 찾기)
          </S.TabRight>
        </S.TabWrapper>

        <S.InputWrapper>
          <S.Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputWrapper>

        <S.LoginButton activeTab={activeTab} onClick={handleLogin}>
          로그인
        </S.LoginButton>

        <S.Bottom>
          <S.Link to="/signup">회원가입</S.Link>
          <S.Split>|</S.Split>
          <S.Link to="/find-id">아이디 찾기</S.Link>
          <S.Split>|</S.Split>
          <S.Link to="/find-password">비밀번호 찾기</S.Link>
        </S.Bottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
