import styled from "styled-components";

export const SecTwoContainer = styled.section`
    max-width: 1350px;
    margin: 0 auto;
    padding: 3.1rem 1rem;

    h2 {
        font-family: 'Inika', serif;
        font-size: 2.26rem;
        text-align: center;
        margin-bottom: 2.5rem;
    }

    .secTwo__bottom {
        display: flex;
        justify-content: center;        
        

        @media screen and (max-width: 1200px){
            flex-wrap: wrap;
        }
    }
`;

export const SecTwoCard = styled.div`
    max-width: 415px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.greythird};
    border-radius: 45px;
    display: flex;
    align-items: center;
    padding: .5rem;
    margin: 1rem 1rem 0;

    &:last-child {
        margin-right: 0;
    }

    .secTwo__icon {
        background-color: ${({theme}) => theme.fourth};
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 1.25rem;
    }
    
    p {
        max-width: 275px;
        width: 100%; 
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
    }
`;
