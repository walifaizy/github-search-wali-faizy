import css from 'styled-jsx/css';

export default css`
    .placeholder {
        background-color: #eee;
    }

    @keyframes shimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }

    .moving {
        animation-duration: 1.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: shimmer;
        animation-timing-function: linear;
        background: darkgray;
        background: linear-gradient(to right, #ff0000 10%, #ff0000 18%, #ff0000 33%);
        background-size: 800px 104px;
        height: 100%;
        position: relative;
    }
`;
