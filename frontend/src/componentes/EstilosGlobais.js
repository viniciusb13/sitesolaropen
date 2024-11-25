import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background: #252128;
        overflow-x: hidden;
        text-decoration: none;
        padding: 0 32px 64px 32px;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: #252128;
        // background: #0B4C5F;
        color: white;
        border: 3px solid white;
        transition: all 0.5s ease;
        &:hover{
            background-color: black;
            color: white;
        }
    }

    h3{
        color: white;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    label{
        color: white;
        font-weight: bold;
    }

    .contact-us-btn a {
        text-decoration: none;
        color: #252128;
    }

    .btn-submit-form,
    .contact-us-btn {
        background: #ffd159;
        color: #252128;
        border: none;
        padding: 12px 32px;
    }

    .btn-submit-form:hover,
    .contact-us-btn:hover {
        background: #CCA747;
        color: #252128;
    }

    .dropdown-menu.show {
        background: #212529;
    }

    .dropdown-item:hover {
        color: #ffd159 !important;
        background: transparent;
    }

    .dropdown-menu button.el-button {
        background: transparent !important;
        color: white !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        height: 100% !important;
        text-align: left !important;
    }

    .dropdown-menu button.el-button:hover {
        background: transparent !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        width: fit-content !important;
    }

    .dropdown-menu button.el-button span {
        font-size: 17.6px !important;
        font-weight: 400 !important;
        color: white !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
    }

    .dropdown-menu button.el-button:hover span {
        color: #ffd159 !important;
    }

    .dropdown-menu button.el-button span:hover {
        color: #ffd159 !important;
    }

    .dropdown-menu button.el-button span {
        visibility: hidden;
        position: relative;
    }

    .dropdown-menu button.el-button span:after {
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
        content: "Sair";
    }

    #userfront-login-form .el-card.is-always-shadow,
    #userfront-signup-form .el-card.is-always-shadow{
        margin-top: 64px;
    }

    #userfront-login-form .el-card__body {
    }

    
`;
export default EstilosGlobais;
