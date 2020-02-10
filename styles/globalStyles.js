import css from 'styled-jsx/css';

export default css.global`
   {
    html,
    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: #f7f7fa;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Proxima Nova, Helvetica Neue, Arial, sans-serif;
      line-height: 1.3;
      color: #404553;
      -webkit-font-smoothing: antialiased;
    }
    *:focus {
      outline: none;
    }
  }
`;
