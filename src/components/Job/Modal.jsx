import React from "react";
import styled from "styled-components";

const S = {
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
  ModalContent: styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    width: 700px;
    max-width: 90%;
  `,
  ModalHeader: styled.h2`
    margin: 0;
    font-size: 1.5rem;
  `,
  ModalBody: styled.div`
    font-size: 1rem;
    padding: 10px;
  `,
  ModalFooter: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  `,
  ModalButton: styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.primary ? "#fdf25d" : "#ccc")};
    color: ${(props) => (props.primary ? "black" : "#333")};
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  `,
  Job: styled.div`
    border-bottom: 2px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
  `,
  JobTitle: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  JobCompanyName: styled.div`
    font-size: 16px;
    color: CornflowerBlue;
  `,
  SubTitle: styled.div`
    font-size: 16px;
    margin-bottom: 10px;
  `,
  ResumeInput: styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 10px;
  `,
};

const Modal = ({ show, onClose, onConfirm, title, name }) => {
  if (!show) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent>
        <S.ModalHeader>알바 온라인 지원</S.ModalHeader>
        <S.ModalBody>
          <S.Job>
            <S.JobTitle>{title}</S.JobTitle>
            <S.JobCompanyName>{name}</S.JobCompanyName>
          </S.Job>
          <S.SubTitle>이력서</S.SubTitle>
          <S.SubTitle>사장님(인사담당자님)께 한마디</S.SubTitle>
          <S.ResumeInput placeholder="지원 동기나 각오를 간단하게 작성해주세요."></S.ResumeInput>
        </S.ModalBody>
        <S.ModalFooter>
          <S.ModalButton onClick={onClose}>취소</S.ModalButton>
          <S.ModalButton primary onClick={onConfirm}>
            지원하기
          </S.ModalButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
