"use client"

import styled from "styled-components";

export const OurPartnerStyled = styled.div`
    margin: auto;    
    margin-top: 366px;
    margin-bottom: 120px;
    background-color:rgb(134, 15, 15);
    width: 90%;
    & h2 {
        font-family: Playfair Display;
        font-weight: 900;
        font-size: 60px;
        line-height: 80px;
        letter-spacing: 3.6px;
        text-align: center;
        vertical-align: middle;
        margin-top: 120px;
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

    & .slick-prev:before {
        color: "#757575";
        display:
    }
    .slick-prev:before, .slick-next:before {
        // font-size: 40px;
    }
`