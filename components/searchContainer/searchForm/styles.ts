import css from 'styled-jsx/css';

export default css`
  .formWrapper {
    padding: 1rem 2rem;
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
    background-color: #4b7bec;
    border: none;
    color: #fff;
    font-size: 1rem;
    padding: 1rem;
    width: 80%;
  }
  :global(.searchBtn) {
    background-color: #fff;
    border: none;
    color: #45aaf2;
    cursor: pointer;
    font-size: 1rem;
    width: 20%;
  }
`;
