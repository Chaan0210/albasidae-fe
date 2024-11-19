import styled from "styled-components";

const S = {
  Wrapper: styled.div``,
  Container: styled.div`
    max-width: 500px;
    margin: 40px auto;
    padding: 10px 40px 10px 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  `,
  Title: styled.div`
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding: 15px 0 15px 0;
  `,
  InputWrapper: styled.div``,
  Input: styled.input`
    width: 96.5%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px 0px 15px 15px;
    outline: none;
  `,
  DoubleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
  `,
  InputFirst: styled.input`
    width: 95%;
    border: none;
    padding: 15px 0px 15px 5px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    outline: none;
  `,
  InputSecond: styled.input`
    width: 95%;
    border: none;
    padding: 15px 0px 15px 5px;
    font-size: 16px;
    outline: none;
  `,
  Button: styled.button`
    width: 100%;
    padding: 15px;
    font-size: 18px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  CompanyButton: styled.button`
    width: 100%;
    padding: 15px;
    font-size: 18px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #5194f6;
    border: 1px solid #2f6df6;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  InputButton: styled.div`
    position: relative;
  `,
  Certify: styled.div`
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px 280px 20px 10px;
    outline: none;
    box-sizing: border-box;
    align-items: center;
  `,
  CertifyButton: styled.button`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    background-color: white;
    color: #2f6df6;
    padding: 8px 15px 8px 15px;
    border-radius: 7px;
    border: 1px solid #2f6df6;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `,
  TabWrapper: styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
  `,
  TabLeft: styled.div`
    text-align: center;
    flex: 1;
    padding: 10px 50px 10px 50px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
    transition: all 0.3s ease;

    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabRight: styled.div`
    text-align: center;
    flex: 1;
    padding: 10px 50px 10px 50px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    transition: all 0.3s ease;

    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  ErrorMessage: styled.div`
    color: red;
    font-size: 14px;
    text-align: center;
    padding-bottom: 20px;
  `,
};

export default S;
