import React from "react";

import MyImg from "../assets/images/utsav.jpeg";
import flutter from "../assets/logos/flutter.png";
import react from "../assets/logos/react.png";
import dj from "../assets/logos/dj.png";
import styled from "styled-components";
const PhotoCardStyle = styled.div`
  min-width: 25%;
  .container {
    margin-top: 2rem;
    float: left;
  }
  .nickname {
    display: none;
    color: var(--primary-color);
  }
  .intro-container {
    text-align: center;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: var(--primary-color);
    .framework-roww {
      max-width: 100%;
      display: inline-flex;
      gap: 12px;
      justify-content: space-evenly;
      text-align: center;
      .framework {
        height: 5rem;
        width: 5rem;
        margin-top: 1.5rem;
        position: relative;
        border-radius: 50%;
        padding: 0 0;
        .framework-image {
          border-radius: 50%;
        }
      }
    }
  }
  .utsavImage {
    border-radius: 12px;
    height: 80%;
    alignment: center;
  }
  //for mobile ui
  @media only screen and (max-width: 768px) {
    .container {
      width: 65%;
      alignment: centre;
      float: none;
      .nickname {
        display: block;
        margin-bottom: 1rem;
        margin-left: 1rem;
        text-align: left;
      }
    }
  }
`;

export default function PhotoCard() {
  return (
    <PhotoCardStyle>
      <div className="container">
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
    </PhotoCardStyle>
  );
}
