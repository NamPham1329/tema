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
        & .total_users {
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
        // max-width: 560px;
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
                background-color: #ffffff;
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
    
`