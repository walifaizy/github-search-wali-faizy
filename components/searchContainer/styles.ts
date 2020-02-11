import css from 'styled-jsx/css';

export default css`
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 70%;
    }
    .error {
        background-color: rgb(255, 255, 255);
        margin-top: -1px;
        padding: 14px 15px 15px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(226, 229, 241);
        border-image: initial;
        display: flex;
        justify-content: center;
        height: 14vh;
        align-items: center;
        font-weight: 600;
        font-size: 1.6rem;
        border-radius: 5px;
    }
`;
