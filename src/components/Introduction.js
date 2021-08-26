import React from 'react'

import MyImg from '../assets/images/utsav.jpeg';
import styled from 'styled-components';

const IntroductionStyle = styled.div
    `
.nickname{
    margin-top: 1rem; 
    margin-left: 1rem;
}
.utsavImage{
    height:20%;
    width:20%;
    margin-top: 3rem;
    margin-left: 5%;
    border-radius: 12px;
    evevation:5.0;
} 

`;


export default function Introduction() {
    return (
        <IntroductionStyle>

            <h1 className='nickname'>theutsavg.</h1>
            <img src={MyImg} alt='utsav img' className='utsavImage' />

        </IntroductionStyle>
    );
}