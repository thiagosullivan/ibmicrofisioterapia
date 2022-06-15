import styled from "styled-components";

export const HeaderContainer = styled.header`

`;

export const TopHeader = styled.header`
    background-color: ${({theme}) => theme.primary};

    .topheader__content {
        max-width: 1350px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header__contact {
            display: flex;

            a {
                display: flex;
                align-items: center;
                padding: .5rem 0;
                margin-right: 1rem;
                color: ${({theme}) => theme.white};
                
                span {
                    font-family: 'Inika', serif;
                }

                svg {
                    margin-right: .5rem;
                }
            }
        }

        .header__social {
            display: flex;
            align-items: center;

            a {
                font-size: 1.5rem;
                color: ${({theme}) => theme.white};
                height: 25px;
                width: 25px;
                margin-right: .5rem;

                &:last-child {
                    margin-right: 0;
                }

                svg {
                    height: 25px;
                    width: 25px;
                }
            }
        }
    }
`;

export const BottomHeader = styled.header`
    box-shadow: 0 9px 10px rgba(0,0,0,.14);
    
    .topbottom__content {
        max-width: 1350px;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            padding: 12px 50px;
            border-radius: 5px;
            background-color: ${({theme}) => theme.secondary};
            font-family: 'Inika', serif;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
    }
`;