import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

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
    height: 600px;
  `,
  MapContainer: styled.div`
    position: relative;
  `,
  JobDetail: styled.div`
    position: absolute;
    top: 2px;
    right: 2px;
    width: 250px;
    height: 566px;
    background-color: white;
    z-index: 10;
    border-radius: 9px;
    padding: 15px;
    border: 2px solid #ddd;
  `,
  MainTitle: styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  `,
  JobContent: styled.div`
    padding: 0 5px;
  `,
  JobTitle: styled.div`
    font-size: 20px;
    margin-bottom: 10px;
  `,
  JobCompanyName: styled.div`
    margin-bottom: 10px;
  `,
  JobButton: styled.button`
    cursor: pointer;
    width: 100%;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    border-radius: 10px;
    padding: 7px 10px;
    &:hover {
      opacity: 0.8;
    }
  `,
  CurrentLocationButton: styled.button`
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 5px 10px;
    background-color: #ddd;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    z-index: 10;
    &:hover {
      background-color: #ccc;
    }
  `,
  Content: styled.div`
    display: flex;
    margin-bottom: 10px;
  `,
  InfoColumn: styled.div`
    flex: 1;
  `,
  DataColumn: styled.div`
    flex: 4;
  `,
  WageInfo: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: darkblue;
  `,
  MinWage: styled.div`
    font-size: 14px;
    color: #aaa;
    margin-bottom: 10px;
  `,
  ImageContainer: styled.img`
    width: 90%;
  `,
};

const JobMap = () => {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [map, setMap] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/job-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const responseData = await response.json();
        const data = responseData?.data || [];
        setJobData(data);
      } catch (error) {
        console.error("Failed to fetch job data: ", error);
      }
    };
    fetchJobData();
  }, []);

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
        const createdMap = new window.kakao.maps.Map(container, options);
        setMap(createdMap);
      });
    };
  }, []);

  useEffect(() => {
    if (map && jobData.length > 0) {
      jobData.forEach((job) => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(job.placeDetail, (result, status) => {
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
              if (selectedJob && selectedJob.id === job.id) {
                setSelectedJob(null);
              } else {
                setSelectedJob(job);
              }
            });
          }
        });
      });
    }
  }, [map, jobData, selectedJob]);

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const locPosition = new window.kakao.maps.LatLng(lat, lng);
          if (map) {
            map.setCenter(locPosition);
          }
        },
        (error) => {
          console.error("Error getting current location: ", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const getTranslatedWorkTerm = (term) => {
    switch (term) {
      case "under_three_month":
        return "3개월 이하";
      case "three_six_month":
        return "3개월~6개월";
      case "six_one_year":
        return "6개월~1년";
      case "over_one_year":
        return "1년 이상";
      case "regardless":
        return "기간 무관";
      default:
        return term;
    }
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>알바지도 검색</S.Title>
        <S.MapContainer>
          <S.Map id="map" />
          {selectedJob && (
            <S.JobDetail>
              <S.MainTitle>선택한 구인공고</S.MainTitle>
              <S.JobContent>
                <S.JobTitle>{selectedJob.title}</S.JobTitle>
                <S.JobCompanyName>{selectedJob.companyName}</S.JobCompanyName>
                <S.Content>
                  <S.InfoColumn>마감 : </S.InfoColumn>
                  <S.DataColumn>{selectedJob.deadline}</S.DataColumn>
                </S.Content>
                <S.Content>
                  <S.InfoColumn>기간 : </S.InfoColumn>
                  <S.DataColumn>
                    {getTranslatedWorkTerm(selectedJob.workTerm)}
                  </S.DataColumn>
                </S.Content>
                <S.Content>
                  <S.InfoColumn>요일 : </S.InfoColumn>
                  <S.DataColumn>
                    {selectedJob?.workDays.join(", ")}
                  </S.DataColumn>
                </S.Content>
                <S.Content>
                  <S.InfoColumn>시간 : </S.InfoColumn>
                  <S.DataColumn>
                    {selectedJob.workTime === "any"
                      ? "시간협의"
                      : `${selectedJob.workTime}시`}
                  </S.DataColumn>
                </S.Content>
                <S.WageInfo>{selectedJob.pay}원</S.WageInfo>
                <S.MinWage>최저시급 9,860원</S.MinWage>
                {selectedJob.companyImage ? (
                  <S.ImageContainer src={selectedJob?.companyImage} />
                ) : (
                  <></>
                )}
                <S.JobButton onClick={() => navigate(`/job/${selectedJob.id}`)}>
                  상세보기
                </S.JobButton>
              </S.JobContent>
            </S.JobDetail>
          )}
          <S.CurrentLocationButton onClick={handleCurrentLocation}>
            현 위치로 이동
          </S.CurrentLocationButton>
        </S.MapContainer>
      </S.Wrapper>
    </>
  );
};

export default JobMap;
