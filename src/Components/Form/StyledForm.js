import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: var(--white);
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 3em;

    &.error {
        position: relative;

        .error-message {
            font-size: 12px;
            position: absolute;
            right: 0;
        }

        .error-message,
        & input[type="email"]::placeholder {
            color: #ff0000b3;
        }

        input[type="email"],
        input[type="email"]:focus {
            outline: 1px solid #ff0000b3;
            border: none;
            background-color: rgb(255 0 0 / 14%);
        }
    }

    h1 {
        font-size: 4em;
        margin-bottom: 2em;
    }

    label {
        font-size: 1.3em;
        margin-bottom: 1em;
    }

    input[type="email"] {
        padding: 1.5em;
        border: 1px solid var(--grey);
        border-radius: 10px;
    }


    input[type="submit"] {
        width: 100%;
        padding: 1.5em 0;
        margin-top: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4em;
        font-weight: 400;
        border: none;
        border-radius: 1em;
        color: var(--white);
        background: var(--dark-grey);
        cursor: pointer;
    }
`;

export default StyledForm;