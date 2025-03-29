import styled from "styled-components";

export const AboutUsStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 128px;
    & > div {
        max-width: 1160px;
        margin: auto;
    }
    & .about_us_info {
        & .about_us {
            font-family: Playfair Display;
            font-weight: 900;
            font-size: 60px;
            line-height: 60px;
            letter-spacing: 3.6px;
        }
        & .des {
            font-family: Montserrat;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            letter-spacing: 0px;
            color: #757575;
            margin-top: 40px;
            margin-bottom: 80px;
        }
        & .total_users, & .total_games {
            & .number-container {
                font-family: Montserrat;
                font-weight: 700;
                font-size: 80px;
                line-height: 100%;
                letter-spacing: -1px;
                color: #079BEE;
                display: flex;
                align-items: baseline;
                & .small-text {
                    font-size: 30px; /* Cỡ chữ nhỏ hơn */
                    vertical-align: baseline; /* Căn theo baseline */
                } 
            }
            margin-bottom: 40px;
        }
        & h4 {
            font-family: Montserrat;
            font-weight: 700 !important;
            font-size: 80px;
            line-height: 100%;
            letter-spacing: -1px;
            color: #079BEE;
            & p {
                font-size: 40px;
            }
        }

        & h5 {
            font-family: Montserrat;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0px;
        }
    }
    
    & .services_info_box {
        & .services_info {
            padding: 113px 75px;
            & > div:not(:last-child) {
                margin-bottom: 40px;
            }     
        } 
        & .icon {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 5px;
            & > div {
                background-color: #E3FCFF;
                padding: 8.5px;
                border-radius: 50%;
            }
        }
        & .service_content {
            & h5 {
                font-family: Montserrat;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                letter-spacing: 0px;
            }
            & .description {
                font-family: Montserrat;
                font-weight: 400;
                font-size: 14px;
                line-height: 140%;
                letter-spacing: 0px;
                color: #757575;
            }
        }
    }

    @media only screen and (max-width: 425px) {
        margin-top: 250px;
        & > div {
            gap: 0;
        }
        & .about_us_info {
            padding: 0 1rem;
            & .about_us {
                font-size: 40px;
                line-height: 50px;
            }
            & .des {
                margin-top: 16px;
                font-size: 14px;
                margin-bottom: 40px;
            }
            }
            & .statistical {
                display: flex;
                & .total_games, & .number-container {
                    font-size: 44px !important;
                }
            }

            & .total_games > h5 {
                margin-top: 8px;
            }
        }
        & .services_info {
            padding: 40px 1rem !important;
        }
    }
    
`