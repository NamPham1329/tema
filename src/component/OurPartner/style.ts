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
    & .carouselWrapper {
        margin-bottom: 40px;
    }
    & .swiper-wrapper {
        padding-left: 50px;
    }

    & .swiper-button-prev, & .swiper-button-next {
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        &::after {
            font-size: 15px;
            font-weight: bold;
            color: black;
        }
    }

    @media only screen and (max-width: 425px) {
        margin-top: 84px;
        padding: 40px 0;
        padding-bottom: 0;
        margin-bottom: 0;
        & h2 {
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 0.6px;
            margin-bottom: 40px;
        }
        & > .container {
            padding-top: 0;
        }
        & .swiper-wrapper {
            padding-left: 0px;
        }
        & .swiper-button-prev, & .swiper-button-next {
            width: 30px;
            height: 30px;
            border-radius: 2px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
            &::after {
                font-size: 15px;
                font-weight: bold;
                color: black;
            }
        }
    }
`