import css from 'styled-jsx/css';

export default css`
    .formWrapper {
        margin: 0 auto;
    }
    .formWrapper .title {
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
    }
    .search {
        box-shadow: 1px 1px 5px #333;
        display: -webkit-box;
        display: flex;
        justify-content: space-around;
        margin: 2rem 0;
    }
    .search > input {
        border: none;
        font-size: 1rem;
        padding: 1rem;
        width: 80%;
        font-weight: 600;
    }
    .ripple {
        padding: 0;
        margin: 0;
        border: none;
        color: #fff;
        background: #3866df;
        box-sizing: border-box;
        outline: none;
        padding: 10px 20px;
        border-radius: 2px;
        text-align: center;
        text-transform: capitalize;
        font-size: 0.8571428571rem;
        font-weight: bold;
        line-height: 1;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
        transition: all ease-in 0.2s;
        width: 20%;
    }
    .ripple.active {
        background: transparent;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        transition: all ease-in 0.2s;
    }

    .ripple:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
    }
    .ripple:active:after {
        transform: scale(0, 0);
        opacity: 0.2;
        transition: 0s;
    }
    .ripple:disabled {
        background: #f9f9f9;
        color: #404553;
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 12px;
        height: 12px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 12px;
        height: 12px;
        border: 2px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
