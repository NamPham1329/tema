"use client"

import styled from "styled-components";

export const OurPartnerStyled = styled.div`
    margin: auto;    
    margin-top: 366px;
    margin-bottom: 120px;
    background-color: #F6F6F6;
    width: 100%;
    padding: 120px;
    & h2 {
        font-family: Playfair Display;
        font-weight: 900;
        font-size: 60px;
        line-height: 80px;
        letter-spacing: 3.6px;
        text-align: center;
        vertical-align: middle;
        margin-bottom: 80px;
    }

    & .item_slider {
        display: flex !important;
        justify-content: center;
        max-width: 260px;
        &:not(:last-child) {
            margin-right: 40px;
        }
    }
    @media only screen and (max-width: 425px) {
        margin-top: 84px;
        padding: 40px 0;
        & h2 {
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 0.6px;
            margin-bottom: 40px;
        }
    }
`