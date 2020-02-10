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
  }
`;
