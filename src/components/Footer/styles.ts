import styled from 'styled-components'

export const FooterContainer = styled.footer`

    .mainFooter {
        width: 100%;
        height: 25rem;
        display: flex;
        justify-content: space-between;
        background: #0B4936;
        border-radius: 40px 40px 0 0;

        padding: 4.375rem 3.75rem 1.875rem;


        .contactLinks {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            border-right: 2px solid #FDFBE2;

            h1 {
                color: #FFF;
                font: 900 3rem "Exo 2", serif;
            }

            .email {
                color: #FDFBE2;
                font: 800 1.2rem "Poppins", serif;
            }

            .socialMedia {
                img {
                    width: 3.5rem;
                    height: auto;
                    margin-right: 2rem;
                }
            }
        }

        .logo {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;

            img {
                width: 15.625rem;
                height: auto;
            }
        }

        @media (max-width: 665px) {
            flex-direction: column;
            gap: 2.5rem;
            height: auto;

            .contactLinks {
                width: 100%;
                border-right: 0;
                border-bottom: 2px solid #FDFBE2;
                padding-bottom: 2rem;
                gap: 4.5rem;
            }

            .logo {
                width: 100%;
                align-items: center;
            }
        }
    }

    .allRightsReserved {
        width: 100%;
        height: 2.5rem;
        background: #292929;

        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font: 800 1rem "Poppins", serif;
            color: #FFF;
        }

        @media (max-width: 665px) {
            p {
                font-size: 0.8rem;
            }
        }

        @media (max-width: 380px) {
            p {
                font-size: 0.6rem;
            }
        }
    }
`
