import styled from 'styled-components';

export const StyledSubscriptionMessage = styled.div`
    max-width: 350px;
    margin: 50px 0;
    background-color: var(--white);
    padding: 3em 4em;
    border-radius: 3em;

    img {
        width: 50px;
    }

    h2 {
        font-size: 4em;
        margin: 20px 0 15px;
    }

    p {
        font-size: 1.2em;
        line-height: 1.5;
        margin-bottom: 20px;
        color: var(--charcoal-grey);
    }

    button {
        color: var(--white);
        background-color: var(--dark-grey);
        border: none;
        width: 100%;
        padding: 15px 0;
        border-radius: 7px;
        font-size: 1.2em;
        cursor: pointer;
    }
`;