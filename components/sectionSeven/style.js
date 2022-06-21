import styled from "styled-components";

export const SecSevenContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 3rem 1rem 8rem;

    .secSeven__content {
        max-width: 1350px;
        margin: 0 auto;

        h2 {
            text-align: center;
            color: ${({theme}) => theme.white};
            font-family: 'Inika', serif;
            font-size: 2.25rem;
            margin-bottom: 8rem;
        }

        .secSeven__text {
            background-color: ${({theme}) => theme.white};
            border-radius: 30px;
            transform: rotate(45deg);
            max-width: 500px;
            height: 500px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .secSeven__text__content {
                transform: rotate(-45deg);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h3 {
                    font-size: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                }

                p {
                    text-align: center;
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
        }
    }
`;

