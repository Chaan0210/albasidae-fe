import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const S = {
  Wrapper: styled.div`
    margin: 20px auto 0px auto;
    max-width: 1000px;
  `,
  Title: styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  `,
  Map: styled.div`
    border: 2px solid #bbb;
    border-radius: 10px;
    height: 500px;
  `,
  MapContainer: styled.div`
    position: relative;
  `,
  JobDetail: styled.div`
    position: absolute;
    top: 2px;
    right: 2px;
    width: 250px;
    height: 466px;
    background-color: white;
    z-index: 10;
    border-radius: 10px;
    padding: 15px;
    border: 2px solid #ddd;
  `,
  MainTitle: styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  `,
  JobTitle: styled.div`
    font-size: 20px;
  `,
  JobCompanyName: styled.div``,
  JobLink: styled.a``,
};

const JobMap = () => {
  const [jobData] = useState([
    {
      id: 1,
      title: "커피숍 알바 구인",
      companyName: "오앤디",
      address: "서울 동대문구 망우로12가길 17",
    },
    {
      id: 2,
      title: "파리바게트 알바 구인",
      companyName: "파리바게트",
      address: "서울 동대문구 망우로 74",
    },
    {
      id: 3,
      title: "투썸 알바 구합니다",
      companyName: "투썸플레이스",
      address: "서울 동대문구 망우로 86",
    },
  ]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d0f6c353b52b3b1fa10942497d761ed4&autoload=false&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.583, 127.059),
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);

        jobData.forEach((job) => {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(job.address, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              window.kakao.maps.event.addListener(marker, "click", () => {
                setSelectedJob(job);
              });
            }
          });
        });
      });
    };
  }, [jobData]);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>알바지도 검색</S.Title>
        <S.MapContainer>
          <S.Map id="map" />
          {selectedJob ? (
            <S.JobDetail>
              <S.MainTitle>선택한 구인공고</S.MainTitle>
              <S.JobTitle>{selectedJob.title}</S.JobTitle>
              <S.JobCompanyName>{selectedJob.companyName}</S.JobCompanyName>
              <S.JobLink href={`/job/${selectedJob.id}`} target="_blank">
                상세보기
              </S.JobLink>
            </S.JobDetail>
          ) : (
            <></>
          )}
        </S.MapContainer>
      </S.Wrapper>
    </>
  );
};

export default JobMap;
