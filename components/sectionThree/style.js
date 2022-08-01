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

        @media screen and (max-width: 500px){
            h2 {
                font-size: 2rem;
            }
        }
    }

    .secThree__bottom {
        display: flex;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;

        @media screen and (max-width: 1100px){
            flex-wrap: wrap;
        }
    }
`;

export const SecThreeCard = styled.section`
    max-width: 450px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.fourth};
    border-radius: 10px;
    margin: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    padding: 1.5rem;

    .secThree__txts {
        min-height: 500px;
    }

    .secThree_title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        height: 95px;

        /* span {
            text-transform: lowercase;
        } */
    }

    @media screen and (max-width: 1100px){
        margin-bottom: 1rem;
    }

    svg {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: ${({theme}) => theme.white};
    }
    h4 {
        color: ${({theme}) => theme.white};
        font-size: 1.2rem;
        text-transform: uppercase;
        text-align: center;
    }
    p {
        margin-bottom: 1rem;
        color: ${({theme}) => theme.white};
        line-height: 1.6;
        text-align: center;
    }
    strong {
        margin-right: .3rem;
        text-transform: uppercase;
    }
    a {
        background-color: ${({theme}) => theme.secondary};
        padding: .5rem 1rem;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
    }
`;