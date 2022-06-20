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

            .secFive__top__text {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 300px;
                text-align: center;
                font-family: 'Montserrat', sans-serif;
                margin-left: 1.5rem;

                h2 {
                    font-weight: bold;
                    font-size: 3rem;
                    font-family: 'Inika', serif;
                    color: ${({theme}) => theme.white};
                }

                p {
                    color: ${({theme}) => theme.fourth};
                }
            }
        }

        .secFive__bottom {
            display: flex;
            justify-content: space-around;
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
    }
`;

export const SecFiveCard = styled.div`
    max-width: 400px;
    width: 100%;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    padding: 2.5rem;
    text-align: center;

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
