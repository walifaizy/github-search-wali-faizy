import css from 'styled-jsx/css';

export default css`
  .item {
    background-color: rgb(255, 255, 255);
    margin-top: -1px;
    padding: 14px 15px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226, 229, 241);
    border-image: initial;
    display: flex;
  }
  .imageCtr {
    width: 25%;
    max-width: 120px;
  }
  .imageCtr > img {
    display: block;
    max-width: 100%;
  }
  .summaryCtr {
    flex: 1 1 0%;
    margin: 0px 15px 0px 15px;
  }
  .name {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .bio {
    color: #3866df;
  }
  a {
    margin: 6px 0 0 0;
    font-size: 1rem;
    display: block;
  }
`;
