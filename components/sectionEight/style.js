import styled from "styled-components";

export const SecEightContainer = styled.section`
    padding: 3rem 1rem;

    .secEight__content {
        max-width: 1350px;
        margin: 0 auto;

        h2 {
            text-align: center;
            color: ${({theme}) => theme.greythird};
            font-family: 'Inika', serif;
            font-size: 2.25rem;
            margin-bottom: 3rem;
        }
    
        .secEight__accordion {
    
            .accordion__item {
                border-bottom: 1px solid ${({theme}) => theme.white};
    
                .secEight__question {
                    background-color: ${({theme}) => theme.third};
                    box-shadow: 0 2px 2px rgba(0,0,0,.15);
                    position: relative;
                    color: ${({theme}) => theme.white};
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;

                    svg {
                        font-size: 2rem;
                        transition: all 150ms ease-in;
                    }                    
                }

                .question__active svg {
                    transform: rotate(90deg);
                }
    
                p {
                    background-color: ${({theme}) => theme.grey};
                    padding: 2rem;
                }
            }
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
