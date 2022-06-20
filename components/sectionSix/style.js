import styled from "styled-components";

export const SecSixContainer = styled.section`
    margin: 3rem 1rem;

    h2 {
        text-align: center;
        color: ${({theme}) => theme.greythird};
        font-family: 'Inika', serif;
        font-size: 2.25rem;
        margin-bottom: 3rem;
    }

    .secSix__bottom {
        display: flex;
        justify-content: space-evenly;
    }

    a {
        padding: 12px 50px;
        max-width: 300px;
        border-radius: 5px;
        background-color: ${({theme}) => theme.secondary};
        font-family: 'Inika', serif;
        font-size: 1.5rem;
        text-transform: uppercase;
        transition: all 150ms ease-in;
        display: block;
        margin: 3rem auto 0;

        &:hover {
            box-shadow: 0 2px 5px rgba(0,0,0,.40);
        }
    }
`;

export const SecSixCard = styled.div`
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
    max-width: 500px;
    border-radius: 10px;
    padding: 2rem;

    .sixCard__top {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;            
        }

        div {
            display: flex;
            flex-direction: column;
            margin-left: 1rem;

            h4 {
            color: ${({theme}) => theme.third};
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            }
            span {
            text-transform: uppercase;
            font-size: 1.2rem;
            }             
        }
    }

    p {
        max-width: 450px;
        width: 100%;
        text-align: justify;
        line-height: 1.5;
    }
`;