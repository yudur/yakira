import styled from 'styled-components'

export const Main = styled.main`
    /* min-width: 100vh; */
    min-height: 100vh;
    display: flex;
    align-items: center;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 4.375rem;

        .indor {
            width: 27%;
            height: auto;
            background: #0B4936;
            border-radius: 20px;

            img {
                width: 100%;
                height: auto;
            }
        }

        .content {
            width: 40%;
            height: auto;
            background: #0B4936;
            border-radius: 20px;
            padding: 1.25rem;

            p {
                font: 900 1.4rem "Poppins", serif;
                color: #FFF;
                line-height: 2rem;

                span {
                    color: #FDFBE2;
                }
            }
        }

        @media (max-width: 1240px) {
            justify-content: center;
            gap: 3rem;
            padding: 0;

            .indor {
                width: 18.75rem;
            }

            .content {
                width: 25rem;

                p {
                    font-size: 1.2rem;
                    line-height: 1.8rem;
                }
            }
        }

        @media (max-width: 780px) {
            gap: 1rem;
        }

        @media (max-width: 740px) {
            flex-direction: column;
            padding: 1.865rem 0;
        }

        @media (max-width: 430px) {
            .indor {
                width: 95%;
            }

            .content {
                width: 95%;

                p {
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
            }
        }
    }
`
