import styled from "styled-components";

export const TitleBanner = styled.div`
    text-align: center;
    color: white;
    @media only screen and (max-width: 375px) {
    & h3 {
        width: 99%;
        font-size: 40px;
        letter-spacing: 0.6px;
        line-height: 50px;
        text-align: center;
        }
    }
`
export const BannerStyled = styled.div`
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    border-radius: 21px;
    max-width: 900px;
    margin: auto;
    margin-bottom: 200px;
    border-radius: 200px;
    position: relative;
    z-index: 1;
    backdrop-filter: blur(4px);
    & .card {
        border-radius: 21px;
        backdrop-filter: blur(4px);
    }
    & .timer_componennt {
        padding: 26px 40px;
        border-radius: 21px;
        & > div:not(:last-child), & > span {
            margin-right: 51px;
        }
        & span {
            font-size: 60px;
            line-height: 64px;
            letter-spacing: 4.8px;
            horizontal-align: center;
            font-family: 'Playfair Display';
        }
        & .subtitle {
            font-family: Montserrat;
            font-weight: 700;
            font-size: 15.64px;
            line-height: 100%;
            letter-spacing: -0.65px;
            text-align: center;
            vertical-align: middle;
        }
    }
        & .send_mail {
            text-align: center;
            width: 51%;
            margin: auto;
            margin-top: 97px;
            margin-bottom: 32px;
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
    @media only screen and (max-width: 375px) {
        padding: 0 1rem;
        & .card {
            width: 100%;
            margin-top: 38px;
            & span {
                font-size: 36px;
                line-height; 45px;
            }
            & .timer_componennt {
                padding: 24px;
                display: flex;
                justify-content: space-between;
            }
            & .timer_componennt > div, & span {
                margin-right: 0px;
            }
        }

        & .send_mail {
            width: 100%;
            margin-top: 40px;
            & > p {
                margin-bottom: 1rem;
                font-size: 12px;
                line-height: 15px
            }
        }
    }
`

export const TimeStyled = styled.div`
    background-color: white;
    width: 38%;
    margin: auto;
    color: black;
    border-radius: 12px;
    padding: 12px;
    padding: 26px 40px;
    border-radius: 21px;
    & .time {
        font-size: 60px;
        line-height: 64px;
        letter-spacing: 4.8px;
        horizontal-align: center;
        font-family: 'Playfair Display';
        font-weight: 700;
    }
`