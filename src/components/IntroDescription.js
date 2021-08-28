import React from "react";
import styled from "styled-components";

const IntroDescriptionStyle = styled.div`
  .elevated-card {
    margin-top: 2rem;
    border-radius: 12px;
    padding: 2rem;
    min-width: 70%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media only screen and (min-width: 768px) {
    max-width: 40%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
 
  }
`;

export default function IntroDescription() {
  return (
    <IntroDescriptionStyle>
      <div className="elevated-card">
        <h4>
          Hi, I am Utsav from Charali, Jhapa. I was always fascinated by how
          computer runs those softwares and websites and how could I also build
          something like that so I decided to learn to code back in 2017. I
          mainly love building scalable & maintainable Mobile Applications using
          Flutter. However I am pretty comfortable working with Frontend Web
          Development with React.js. I also love developing backend systems
          using Python Django as hobby.
        </h4>
      </div>
    </IntroDescriptionStyle>
  );
}
