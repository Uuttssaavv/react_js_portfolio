import React from "react";
import PhotoCard from "../IntroPhotoCard";
import IntroDescription from "../IntroDescription";
import styled from "styled-components";

const HomeStyle = styled.div`
  min-width: 100%;
  margin: 3rem 0;
  .home-section {
    display: inline-flex;
    margin: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .photocard {
      margin-top: 5rem;
      width: 25%;
    }
  }
  @media only screen and (max-width: 768px) {
    .home-section {
      display: inline-flex;
      margin: 0;
      justify-content: center;
      align-items: center;
      .photocard {
        margin-top: 4rem;
        width: 100%;
      }
    }
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <div className="home-section">
        <div className="photocard">
          <PhotoCard />
        </div>
        <IntroDescription />
      </div>
      <div className="home-section">
        <div className="photocard">
          <PhotoCard />
        </div>
        <IntroDescription />
      </div>
    </HomeStyle>
  );
}
