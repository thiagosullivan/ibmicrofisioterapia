import darken from "polished/lib/color/darken";
import styled from "styled-components";

export const FormacoesContainer = styled.section`
    max-width: 1350px;
    margin: 5rem auto 0;
    padding: 0 1rem 3rem;
    /* display: flex;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
    gap: 20px;
    justify-items: center;
`

export const FormacoesCard = styled.div`
    border-radius: 5px;
    padding: 80px 2rem 2rem;
    max-width: 600px;
    width: 100%;
    margin-bottom: 5rem;
    position: relative;
    background-color: rgba(0,0,0,.05);
    box-shadow: 1px 1px 15px rgba(0,0,0,.3);

    .form__img {
        position: absolute;
        top: -40px;
        right: 50%;
        transform: translateX(50%)
    }
    .formCard__infos {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;

        p {
            margin-bottom: 10px;
            span {
                font-weight: bold;
                margin-bottom: 10px;
            }
        }

        ul {
            margin-bottom: 1rem;

            p {
                margin-bottom: 10px;
                font-weight: bold;
            }
            li {
                padding-left: 15px;
            }
        }
        .formCard__alert {
            margin-top: 1.5rem;

            p {
                color: ${({theme}) => theme.error};
                font-weight: bold;
            }
        }
    }
    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }
    h4 {
        text-align: center;
        margin-bottom: 1rem;
    }
    a {
        background-color: ${({theme}) => theme.secondary};
        padding: .5rem 1rem;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;
        max-width: 170px;
        margin: 2rem auto 0;
        transition: all 150ms ease-in;

        &:hover {
            background-color: ${({ theme }) => darken(0.1, theme.secondary)};
            color: ${({theme}) => theme.white};
        }
    }
`