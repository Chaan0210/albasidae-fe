import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../auth/AuthContext";

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
  ModalHeader: styled.div`
    font-size: 20px;
    margin-bottom: 10px;
  `,
  ModalBody: styled.div`
    padding: 10px;
  `,
  ModalFooter: styled.div`
    margin-right: 10px;
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
    font-size: 26px;
    font-weight: bold;
  `,
  JobCompanyName: styled.div`
    font-size: 16px;
    color: CornflowerBlue;
  `,
  SubTitle: styled.div`
    font-size: 18px;
    margin-bottom: 10px;
  `,
  ResumeInput: styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 10px;
  `,
  ResumeOption: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,
  ResumeRadio: styled.input`
    margin-right: 15px;
  `,
  ResumeTitle: styled.div`
    font-size: 18px;
  `,
  RadioContainer: styled.div`
    margin-bottom: 30px;
  `,
  ErrorMessage: styled.div`
    color: red;
  `,
};

const Modal = ({ show, onClose, title, name, handleSubmit }) => {
  const { email } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  const [selectedResumeId, setSelectedResumeId] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [resumeErrorMessage, setResumeErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!show) return;
    setResumeErrorMessage("");
    setDescriptionErrorMessage("");

    const fetchResumeData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/resumes?email=${encodeURIComponent(email)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const responseData = await response.json();
        const data = responseData?.data || [];
        setResumes(data);
      } catch (error) {
        console.error("Fail to fetch: ", error);
      }
    };
    fetchResumeData();
  }, [show, email]);

  const handleConfirm = () => {
    let hasError = false;

    if (!selectedResumeId) {
      setResumeErrorMessage("이력서를 선택해주세요.");
      hasError = true;
    } else {
      setResumeErrorMessage("");
    }

    if (!descriptionText.trim()) {
      setDescriptionErrorMessage("한마디를 입력해주세요.");
      hasError = true;
    } else {
      setDescriptionErrorMessage("");
    }

    if (hasError) {
      return;
    }

    const requestData = {
      id: 0,
      resume: parseInt(selectedResumeId),
      description: descriptionText,
    };

    handleSubmit(requestData)
      .then(() => {
        onClose();
      })
      .catch((error) => {
        console.error("Error applying: ", error);
        setDescriptionErrorMessage(
          "An error occurred while trying to apply the job."
        );
      });
  };

  if (!show) return null;

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent>
        <S.ModalHeader>*알바 온라인 지원*</S.ModalHeader>
        <S.ModalBody>
          <S.Job>
            <S.JobTitle>{title}</S.JobTitle>
            <S.JobCompanyName>{name}</S.JobCompanyName>
          </S.Job>
          <S.SubTitle>- 내 이력서 선택</S.SubTitle>
          <S.RadioContainer>
            {resumes.map((resume) => (
              <S.ResumeOption key={resume.id}>
                <S.ResumeRadio
                  type="radio"
                  name="resume"
                  value={resume.id}
                  checked={selectedResumeId === String(resume.id)}
                  onChange={() => setSelectedResumeId(String(resume.id))}
                />
                <S.ResumeTitle>
                  {resume.resumeTitle || `이력서 ${resume.id}`}
                </S.ResumeTitle>
              </S.ResumeOption>
            ))}
            {resumeErrorMessage && (
              <S.ErrorMessage>{resumeErrorMessage}</S.ErrorMessage>
            )}
          </S.RadioContainer>

          <S.SubTitle>- 사장님(인사담당자님)께 한마디</S.SubTitle>
          <S.ResumeInput
            placeholder="지원 동기나 각오를 간단하게 작성해주세요."
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.target.value)}
          />
          {descriptionErrorMessage && (
            <S.ErrorMessage>{descriptionErrorMessage}</S.ErrorMessage>
          )}
        </S.ModalBody>
        <S.ModalFooter>
          <S.ModalButton onClick={onClose}>취소</S.ModalButton>
          <S.ModalButton primary onClick={handleConfirm}>
            지원하기
          </S.ModalButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
