import React from "react";

import MyImg from "../assets/images/utsav.jpeg";
import flutter from "../assets/logos/flutter.png";
import react from "../assets/logos/react.png";
import dj from "../assets/logos/dj.png";
import styled from "styled-components";
const IntroductionStyle = styled.div`
  .container {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .nickname {
    margin-bottom: 1rem;
    margin-left: 1rem;
    text-align: left;
    display: none;
    color: var(--primary-color);
  }
  .intro-container {
    width: 25%;
    text-align: center;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: var(--primary-color);
    .framework-roww {
      display: inline-flex;
      gap: 12px;
      justify-content: space-evenly;
      width: 100%;
      text-align: center;
      .framework {
        height: 5rem;
        width: 5rem;
        margin-top: 1.5rem;
        position: relative;
        border-radius: 50%;
        padding: 0 0;
        // background-color: white;
        .framework-image {
          border-radius: 50%;
        }
      }
    }
  }
  .utsavImage {
    border-radius: 12px;
    width: 100%;
    height: 80%;
    alignment: center;
  }
  //for mobile ui
  @media only screen and (max-width: 768px) {
    .intro-container {
      width: 65%;
      display: inline-block;
    }
  }
`;

export default function Introduction() {
  return (
    <IntroductionStyle>
      <div className="container">
        <h2 className="nickname"> theutsavg. </h2>
        <div className="intro-container">
          <img src={MyImg} alt="utsav img" className="utsavImage" />
          <div className="framework-roww">
            <div className="framework">
              <img
                src={flutter}
                alt="flutter logo"
                className="framework-image"
              />
            </div>
            <div className="framework">
              <img src={dj} alt="dj logo" className="framework-image" />
            </div>{" "}
            <div className="framework">
              <img src={react} alt="react logo" className="framework-image" />
            </div>
          </div>
        </div>
      </div>
    </IntroductionStyle>
  );
}
