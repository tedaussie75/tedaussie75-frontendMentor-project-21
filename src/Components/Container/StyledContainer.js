import styled from 'styled-components';

export const StyledContainer = styled.div`
    display : ${(props) => props.display};
    flex-direction : ${(props) => props.direction};
    gap : ${(props) => props.gap};
    margin : ${(props) => props.margin};
    padding : ${(props) => props.padding};
    width : ${(props) => props.width};
    align-items : ${(props) => props.vertical};
    justify-content : ${(props) => props.horizontal};

    &.Main-container {
        margin: 50px 0;
        background-color: var(--white);
        padding: 2em;
        border-radius: 3em;

        @media screen and (max-width: 1000px) {
            flex-direction: column-reverse;
            padding: 0;

            & picture img {
                border-radius: 30px;
            }

            & > div:first-child {
                margin: 20px 0 40px;
            }
        }

        & picture img {
            width: 100%;
        }

        h1 {
            font-size: 5em;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.6em;
            margin-bottom: 20px;
        }

        ul {
            li {
                font-size: 1.6em;
                margin-bottom: 15px;
                display: flex;
                align-items: center;

                & img {
                    margin-right: 15px;
                }
            }
        }
    }

    @media (max-width: 60em) {
        flex-direction : ${(props) => props.media};
    }
`;