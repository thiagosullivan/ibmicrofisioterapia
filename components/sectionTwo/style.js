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
        align-items: center;

        @media screen and (max-width: 1200px){
            flex-wrap: wrap;
        }

        @media screen and (max-width: 980px) {
            flex-direction: column;
        }
    }

    .secTwo_col1 {
        width: 45%;
        margin-right: 4rem;
    }
    .secTwo_col2 {
        max-width: 600px;
        width: 100%;
    }

    @media screen and (max-width: 1190px){
        .secTwo_col1 {
            width: 35%;
        }
        .secTwo_col2 {
            max-width: 500px;
            width: 100%;
        }
    }

    @media screen and (max-width: 980px) {
        .secTwo_col1 {
            width: 100%;
            margin: 0 auto 4rem;
            display: flex;
            flex-direction: column;
            align-items: center; 
        }
        .secTwo_col2 {
            max-width: 600px;
            width: 100%;
        }
    }
`;

export const SecTwoCard = styled.div`
    max-width: 550px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.greythird};
    border-radius: 90px;
    display: flex;
    align-items: center;
    padding: .5rem;
    margin: 1rem 1rem 0;

    &:last-child {
        margin-right: 0;
    }

    .secTwo__icon {
        background-color: ${({theme}) => theme.fourth};
        background-position: center;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        margin-right: 1.25rem;
        position: relative;

        img {
            border-radius: 50%;
        }
    }
    
    p {
        /* max-width: 275px;
        width: 100%;  */
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1190px){
        max-width: 500px;
    }
`;

export const SectionTwoImg = styled.div`
    background-image: url(${props => props.imgUrl.src});
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
`