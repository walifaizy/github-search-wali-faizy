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
    max-width: 86px;
  }
  .imageCtr > img {
    display: block;
    max-width: 100%;
  }
  .summaryCtr {
    flex: 1 1 0%;
    margin: 0px 15px 0px 0px;
  }
`;
