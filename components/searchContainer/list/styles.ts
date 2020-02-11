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
        border-radius: 5px;
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
        margin: 3px 0 0 0;
        color: #3866df;
        font-size: 0.85rem;
        display: block;
    }
    .email {
        font-size: 0.85rem;
    }
    .reposWrapper {
        margin: 10px 0 0 0;
        height: 400px;
        overflow: auto;
    }
    .listItem {
        display: block;
        padding: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        border: 1px solid #e7e7e7;
        border-bottom: none;
        border-radius: 2px;
        background: #fff;
    }
    .top {
        display: flex;
    }
    .repoImg {
        margin: 0 8px 0 0;
    }
    .repoName {
        font-size: 0.85rem;
        color: rgb(126, 133, 155);
    }
    .card {
        background-color: rgb(255, 255, 255);
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
        font-size: 1rem;
    }
    .repoTitle {
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        margin: 12px 0 12px 0;
    }
`;
