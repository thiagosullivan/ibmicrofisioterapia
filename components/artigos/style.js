import { darken } from "polished";
import styled from "styled-components";

export const ArtigosContainer = styled.section`
    max-width: 1350px;
    width: 100%;
    margin: 5rem auto 0;
`;

export const ArticleItem = styled.section`
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 2rem 1rem 0;
    margin-bottom: 3rem;

    &:last-child {
        border-bottom: none;
    }
    
    h3 {
        font-size: 1.5rem;
        text-decoration: underline;
        text-align: center;
    }

    .btn_download {
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
        padding: 1rem;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 200px;
        border-radius: 10px;
        margin: 2rem auto;
        transition: all 150ms ease-in;

        svg {
            font-size: 2rem;
            margin-right: 10px;
        }

        &:hover {
            background-color: ${({ theme }) => darken(0.1, theme.primary)};
        }
    }

    @media screen and (max-width: 650px){
      h3 {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 450px){
      h3 {
        font-size: 1rem;
      }
      .btn_download {
        max-width: 150px;
        font-size: 1rem;
        padding: .8rem;

        svg {
            font-size: 1.5rem;
        }
      }
    }
`;

