"use client"

import styled from "styled-components";

export const OurgameStyled = styled.div`
    margin: 0 80px;
    & .card_item {
        background-color: unset;
        & > div {
            border-radius: 20px;
            box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        }
    }
    & .content {
        margin: auto;
        max-width: 860px;
        margin-bottom: 80px;

        & > h2 {
            font-family: Playfair Display;
            font-weight: 900;
            font-size: 60px;
            line-height: 60px;
            letter-spacing: 3.6px;
            text-align: center;
            vertical-align: middle;
            margin-bottom: 24px;
        }

        & > p {
            font-family: Montserrat;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            letter-spacing: 0px;
            text-align: center;
            color: #757575;
        }
    }

    & .game {
        & .name {
            font-family: Montserrat;
            font-weight: 700;
            font-size: 48px;
            line-height: 60px;
            letter-spacing: -1px;
            vertical-align: bottom;
            margin-bottom: 15px;
        }
        & .description {
            font-family: Montserrat;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            letter-spacing: 0px;
            vertical-align: bottom;
        }
    }
`