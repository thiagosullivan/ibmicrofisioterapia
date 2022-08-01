import styled from "styled-components";

export const SectionFourContainer = styled.section`
    max-width: 1350px;
    margin: 0 auto;
    padding: 3rem 1rem;

    h2 {
        text-align: center;
        color: ${({theme}) => theme.greythird};
        font-family: 'Inika', serif;
        font-size: 2.25rem;
        margin-bottom: 3rem;
    }
    .secFour__bottom {
        display: flex;
        justify-content: center;

        @media screen and (max-width: 1200px){
            flex-wrap: wrap;
        }
    }

    .btn__telegram {
        background-color: #0088cc;
        color: ${({theme}) => theme.white};
        margin: 3rem auto 0;
        text-align: center;
        max-width: 300px;
        display: flex;
        flex-direction: center;
        align-items: center;
        font-weight: bold;
        padding: .5rem 1rem;
        border-radius: 10px;
        transition: all 150ms ease-in;

        &:hover {
            box-shadow: 1px 2px 4px rgba(0,0,0,.3);
        }
        svg {
            font-size: 3.5rem;
            margin-right: 5px;
        }
    }

    @media screen and (max-width: 500px){
        h2 {
            font-size: 2rem;
        }
    }
`;

export const SecFourCard = styled.div`
    max-width: 270px;
    min-height: 270px;
    width: 100%;
    height: 100%;
    margin: 0 1.5rem;
    border: 1px solid ${({theme}) => theme.fourth};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 1.5rem;

    @media screen and (max-width: 1200px){
        margin-bottom: 1rem;
    }

    h4 {
        color: ${({theme}) => theme.primary};
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    p {
        max-width: 200px;
        width: 100%;
        font-size: 0.9rem;
    }

    a {
        background-color: ${({theme}) => theme.secondary};
        padding: .5rem 1rem;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
    }
`;