import styled from "styled-components";

export const BannerContainer = styled.div`
    background: ${({theme}) => theme.fourth};
    padding: 2rem 1rem;

    .banner__content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;