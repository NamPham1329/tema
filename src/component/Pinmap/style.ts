"use client"

import styled, { keyframes } from "styled-components";

const fly = keyframes`
  0% { transform: translateX(-10px) translateY(0) rotate(0deg); }
  50% { transform: translateX(10px) translateY(-10px) rotate(2deg); }
  100% { transform: translateX(-10px) translateY(0) rotate(0deg); }
`;

const moveAcross = keyframes`
  0% { left: 0%; }
  50% { left: 50%; }
  100% { left: 100%; }
`;

export const PinmapStyled = styled.div`
    max-width: 1160px;
    display: flex;
    justify-content: center;
    margin-top: 68px;
    margin-bottom: 128px;
    position: relative;
     & .image_top {
        max-width: 533px;
        margin: auto;
        z-index: 2;
        animation: ${fly} 4s infinite ease-in-out, ${moveAcross} 10s infinite linear alternate;
     }

     & .map {
        margin-top: -9%;
        z-index: 1;
        height: 428px;
     }
}
`