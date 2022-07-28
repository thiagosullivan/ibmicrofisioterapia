import styled from "styled-components";

export const BannerContainer = styled.div`
    background: ${({theme}) => theme.fourth};
    padding: 2rem 1rem 0rem;

    .banner__content {
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 600px){
            flex-direction: column;
            align-items: center;
        }
    }
`;