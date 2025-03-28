"use client"

import styled from "styled-components";

export const StyledBanner = styled.div`
    width: 100%;

    background-image: url("/images/BG.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    & .banner {
         margin-top: 270px;
    }
`

export const StyledLayout = styled.div`
    & .header {
        position: fixed;    
        top: 0;
        z-index: 9999;
        & .menu {
            margin-top: 20px;
        }
    }

    & .footer {
        padding: 104px 230px;
        color: white;
        & .icon_social {
            color: white;
            width: 168px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            & > svg {
                width: 40px;
                height: 40px;
            }
        }

        & .contact {
            color: white;
        }
    }

    & .copy_right {
        color: white;
        wid
    }
`