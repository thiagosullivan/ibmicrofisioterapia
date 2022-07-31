import styled from "styled-components";

export const SectionNineContainer = styled.section`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 2rem 4rem;
    border-bottom: 1px solid #eeeeee;

    h2 {
        text-align: center;
        color: ${({theme}) => theme.greythird};
        font-family: 'Inika', serif;
        font-size: 2.25rem;
        margin-bottom: 3rem;
    }
`