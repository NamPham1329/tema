import styled from "styled-components";

export const StyledBanner = styled.div`
    width: 100%;
    // position: fixed;
    // top: 0;
    // padding-top: 162px;\

    background-image: url("/images/BG.svg");
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
`