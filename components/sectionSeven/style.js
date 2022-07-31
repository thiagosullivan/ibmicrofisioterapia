import styled from "styled-components";

export const SecSevenContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    padding: 3rem 1rem 4rem;

    .secSeven__content {
        max-width: 1350px;
        margin: 0 auto;

        h2 {
            text-align: center;
            color: ${({theme}) => theme.white};
            font-family: 'Inika', serif;
            font-size: 2.25rem;
            margin-bottom: 3rem;
        }

        .secSeven__img {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
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

            @media screen and (max-width: 780px){
                max-width: 350px;
                height: 350px;
            }
            
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

                @media screen and (max-width: 780px){
                    h3 {
                        text-align: center;
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
            }
        }
    }

    @media screen and (max-width: 700px){
        .secSeven__content .secSeven__text {
            transform: rotate(0deg) !important;
            max-width: 500px !important;
            height: unset !important;
            padding: 4rem;
        }
        .secSeven__content .secSeven__text .secSeven__text__content {
            transform: rotate(0deg) !important;
        }
    }
    @media screen and (max-width: 450px){
        .secSeven__content .secSeven__text {
            padding: 2rem;
        }
    }
`;

