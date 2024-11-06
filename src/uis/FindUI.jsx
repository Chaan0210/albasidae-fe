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
  Subtitle: styled.div`
    font-size: 17px;
    font-weight: bold;
    text-align: start;
    padding-bottom: 10px;
  `,
  Input: styled.input`
    width: 96.5%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px 0px 15px 15px;
    outline: none;
  `,
  MultiWrapper: styled.div`
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
    font-size: 16px;
    outline: none;
    padding: 15px 0px 15px 5px;
  `,
  Button: styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    font-weight: bold;
    color: ${({ activeTab }) => (activeTab === "personal" ? "black" : "white")};
    background-color: ${({ activeTab }) =>
      activeTab === "personal" ? "#fdf25d" : "#5194f6"};
    border: 1px solid
      ${({ activeTab }) => (activeTab === "personal" ? "#fae04b" : "#2f6df6")};
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  TabWrapper: styled.div`
    display: flex;
    margin-bottom: 10px;
  `,
  TabLeft: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
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
    font-size: 16px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  //   RadioWrapper: styled.div`
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     border: 1px solid #ddd;
  //     border-radius: 10px;
  //     margin-bottom: 10px;
  //     background-color: #f7f7f7;
  //     padding: 15px;
  //   `,
  //   RadioLabel: styled.label`
  //     margin: 0 20px;
  //     font-size: 16px;
  //   `,
  //   RadioInput: styled.input`
  //     margin-right: 5px;
  //   `,
  ErrorMessage: styled.div`
    color: red;
    font-size: 14px;
    text-align: center;
    padding-bottom: 20px;
  `,
  SuccessMessage: styled.div`
    color: green;
    font-size: 16px;
    text-align: center;
    padding-bottom: 20px;
  `,
};

export default S;
