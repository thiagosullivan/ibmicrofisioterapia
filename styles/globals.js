import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
    scroll-behavior: smooth;
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  img {
    /* width: 100%;
    max-width: 100%; */
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .disableScroll {
    height: 100%;
    overflow-y: hidden;
  }
  #formacoes {
    h1 {
      text-align: center;
      color: ${({theme}) => theme.primary};
      font-family: 'Inika', serif;
      font-size: 3.25rem;
      margin-bottom: 1rem;
      margin-top: 3rem;
    }
    .page__subtitle {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }

  #artigos {
    h1 {
      text-align: center;
      color: ${({theme}) => theme.primary};
      font-family: 'Inika', serif;
      font-size: 3.25rem;
      margin-bottom: 1rem;
      margin-top: 3rem;
    }
    .page__subtitle {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
`;