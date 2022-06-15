import styled from "styled-components";

export const SectionThreeContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 3.1rem 1rem;

    .secThree__content {
        max-width: 1350px;
        margin: 0 auto;
        
        h2 {
            text-align: center;
            color: ${({theme}) => theme.white};
            font-family: 'Inika', serif;
            font-size: 2.25rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.5rem;
            color: ${({theme}) => theme.white};
            text-align: center;
            margin-bottom: 3rem;
        }
    }

    .secThree__bottom {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const SecThreeCard = styled.section`
    max-width: 250px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.fourth};
    border-radius: 10px;
    margin: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;

    svg {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: ${({theme}) => theme.white};
    }
    h4 {
        margin-bottom: 1rem;
        color: ${({theme}) => theme.white};
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    span {
        margin-bottom: 1rem;
        color: ${({theme}) => theme.white};
    }
    a {
        background-color: ${({theme}) => theme.secondary};
        padding: .5rem 1rem;
        border-radius: 5px;
        font-weight: bold;
    }
`;