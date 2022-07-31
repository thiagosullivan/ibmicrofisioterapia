import styled from "styled-components";

export const SectioFiveContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 3rem 1rem;

    .secFive__content {
        max-width: 1350px;
        margin: 0 auto;

        .secFive__top {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3rem;

            @media screen and (max-width: 770px){
                flex-direction: column;
            }

            .secFive__top__text {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 500px;
                text-align: center;
                font-family: 'Montserrat', sans-serif;
                margin-left: 1.5rem;

                h2 {
                    font-weight: bold;
                    font-size: 3rem;
                    font-family: 'Inika', serif;
                    color: ${({theme}) => theme.white};
                    margin-bottom: 1rem;
                }

                p {
                    color: ${({theme}) => theme.fourth};
                    font-size: 1.2rem;
                }
            }
        }

        .secFive__bottom {
            display: flex;
            justify-content: space-around;

            @media screen and (max-width: 980px){
                flex-wrap: wrap;
            }

            @media screen and (max-width: 850px){
                flex-direction: column;
                flex-wrap: nowrap;
                align-items: center;
            }
        }

        a {
            padding: 12px 50px;
            max-width: 300px;
            width: 100%;
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

        @media screen and (max-width: 500px){
            a {
                margin-top: 2rem;
                font-size: 1rem;
                text-align: center;
                max-width: 250px;
            }
        }

        .secFive__video {
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
        }
    }
`;

export const SecFiveCard = styled.div`
    max-width: 400px;
    width: 100%;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    padding: 2.5rem;
    text-align: center;
    margin-right: 1rem;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 980px){
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 850px){
        margin-bottom: 1rem;
        margin-right: 0;
    }

    h4 {
        font-family: 'Inika', serif;
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        min-height: 85px;
    }

    p {
        min-height: 150px;
    }
`;
