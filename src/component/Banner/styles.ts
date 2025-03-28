import styled from "styled-components";

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
`