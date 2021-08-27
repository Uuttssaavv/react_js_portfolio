import React from "react";

import MyImg from "../assets/images/utsav.jpeg";
import styled from "styled-components";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    color: var(--primary-color);
  }
  .intro-container {
    width: 70%;
    text-align: center;
    background-color: #afafaf;
    display: inline-block;
    border-radius: 12px;
    padding: 2rem;
    color: var(--primary-color);
    .framework {
      height: 15%;
      width: 15%;
      margin-top: 1.5rem;
      position: absolute;
      display: block;
      border-radius: 1000px;
      background-color: red;
    }
  }
  .utsavImage {
    border-radius: 10px;
    border-radius: 12px;
    height: 80%;
    alignment: center;
  }
  .socialRow {
    display: inline-block;
    width: 65%;
    padding: 0.5rem 0;
    text-align: center;
    .socialItem {
      padding: 1rem 5%;
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
          <div className="framework">
            <h5>Hi</h5>
          </div>
          <div className="social-medias">
            <h1 className="name"> Utsav Ghimire </h1>
            <h3 className="name"> Full Stack Mobile Developer </h3>

            <div className="socialRow">
              <a
                className="socialItem"
                href="https://facebook.com/theutsavg"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                className="socialItem"
                href="https://www.instagram.com/theutsavg"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                className="socialItem"
                href="https://github.com/Uuttssaavv"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                className="socialItem"
                href="https://medium.com/@theutsavg"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </IntroductionStyle>
  );
}
