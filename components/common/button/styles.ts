import css from 'styled-jsx/css';

export default css`
   {
    .ripple {
      padding: 0;
      margin: 0;
      border: none;
      background: none;
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
      color: #404553';
    }

    .ripple:disabled:hover {
      background: #f9f9f9;
    }

    .blue {
      color: #fff;
      box-shadow: 0 0 0 1px #3866df inset;
      background: #3866df;
      box-sizing: border-box;
    }
    .blue:hover {
      box-shadow: 0 0 0 1px #3866df inset, 0 3px 2px 0 rgba(0, 0, 0, 0.15);
    }
    .blue:active .active {
      opacity: 0.1;
      background: #3866df;
    }
  }
`;
