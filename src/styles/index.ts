"use client"

import styled from "styled-components";

export const StyledBanner = styled.div`
    width: 100%;
    background-image: url("/images/BG.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    & .banner {
        margin-top: 310px;
        margin-bottom: 200px;
        position: relative;
        & .bottom {
            width: 45%;
            padding: 4%;
            padding-top: 0;
            border-radius: 30%;
            margin: auto;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(10px);
            position: relative;
            z-index: 1;
        }
        & .banner_title {
            letter-spacing: 0em;
            font-size: 80px;
            font-weight: 900;
            line-height: 120px;
            font-family: Playfair Display;
            color: white;
            text-align: center;
        }
            & .timer-container {
                & .title{
                    font-family: Montserrat;
                }
           }
    }
     & .send_mail {
            text-align: center;
            width: 65%;
            margin: auto;
            margin-top: 97px;
            margin-bottom: 32px;
            color: white;
            & .decscription {
                font-family: Montserrat;
                font-weight: 400;
                font-size: 18px;
                line-height: 126%;
                letter-spacing: 0px;
                text-align: center;
            }
            & form {
                margin-top: 32px;
             }
        }
    @media only screen and (max-width: 425px) {
        & .banner {
           margin-top: 100px;
           padding: 0;
           margin-bottom: 79px;
           & .bottom {
            width: 100%;
            padding: 4rem 1rem;
            border-radius: 30%;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
           & .image {
                width: 92% !important;
                bottom: -290px !important;
            }
           & .timer-container {
                width: 100%;
                padding: 24px 26px;
                margin-top: 8px;
                & .title{
                    font-size: 12px;
                    font-weight: 900;
                }
           }
           & .banner_title {
                font-size: 40px;
                line-height: 50px;
                letter-spacing: 0.6px;
                width: 99%;
                margin: auto;
            }
            & .time {
                font-size: 36px;
            }
            & .send_mail {
                text-align: center;
                width: 100%;
                margin: auto;
                margin-top: 40px;
                margin-bottom: 0px;
                & > p {
                    margin-bottom: 1rem;
                }
                & .decscription {
                    font-family: Montserrat;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 126%;
                    letter-spacing: 0px;
                    text-align: center;
                }
                & form {
                    margin-top: 32px;
                }
            }
            
        }
            
    }
`
export const StyledInputLang = styled.div`
    & .MuiButtonBase-root  {
        padding-top: 0;
    }
`


export const StyledLayout = styled.div`
    & .header {
        position: fixed;    
        top: 0;
        z-index: 999;
        & .menu {
            margin-top: 20px;
        }
    }

    & .footer {
        padding: 104px 230px;
        color: white;
        background-image: url("/images/BG (1).svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        & .icon_social {
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
            & .name_section {
                font-family: Montserrat;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                letter-spacing: 0px;
                margin-bottom: 40px;
            }
            & .address, & .phone, & .title {
                display: flex;
                align-items: baseline;
                & .icon {
                    margin-right: 8px;

                    & svg {
                    width: 40px;
                    height: 40px;
                    }
                }
                & p {
                    font-family: Montserrat;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 140%;
                    letter-spacing: 0px;
                    margin-bottom: 12px;
                }
            }
        }

        & .specific_address {
            align-self: center;
        }
    }

    & .copy_right {
        width: 100%;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 18px;
        line-height: 126%;
        letter-spacing: 0px;
        text-align: center;
        padding: 30px 0 27px 0;
        color: white;
        background-color: black;
    }
    @media only screen and (max-width: 425px) {
        & .footer {
            padding: 40px 1rem;
        
        & .logo_social{
            display: flex;
            justify-content: center;
        }
        & .icon_social {
            margin-top: 40px;
            & > svg {
                width: 40px;
                height: 40px;
            }
        }

        & .contact {
            & .name_section {
                margin-bottom: 20px;
            }
            & .address, & .phone, & .title {
                display: flex;
                align-items: baseline;
                & .icon {
                    margin-right: 8px;

                    & svg {
                    width: 40px;
                    height: 40px;
                    }
                }
                & p {
                    margin-bottom: 12px;
                }
            }
        }
        & .specific_address {
            align-self: center;
        }
        }
    }
`