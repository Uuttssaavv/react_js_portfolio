import React from "react";
import PhotoCard from "../IntroPhotoCard";
import IntroDescription from "../IntroDescription";
import styled from "styled-components";

const HomeStyle = styled.div`
  min-width: 100%;
  .home-section {
    display: inline-flex;
    margin: 0;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .photocard {
      width: 25%;
    }
  }
  @media only screen and (max-width: 768px) {
    .home-section {
      display: inline-flex;
      flex-direction: column;
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
    </HomeStyle>
  );
}
