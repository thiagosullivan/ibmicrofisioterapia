import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;

    a {
        color: ${({theme}) => theme.white};
    }

    .footer__social {
        text-align: center;
        font-size: 2rem;
        margin: 2rem 0;

        a {
            margin: 0 10px;
        }

        @media screen and (max-width: 600px){
            font-size: 1.5rem;
        }
    }

    .footer__contact__two {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: 10px;
            font-size: 1.5rem;
        }

        a {
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }

        @media screen and (max-width: 600px){
            svg {
                margin-right: 10px;
                font-size: 1.2rem;
            }

            a {
                font-size: 1rem;
            }
        }
    }
`;