import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #222;
    padding-top: 1.25rem;

    .rodape {
        font-size: 1.25rem;
        text-align: center;
        color: #fff;
        font-family: 'Calibri';

        ul {
            text-decoration: none;
            font-size: 25px;
            display: flex;
            justify-content: center;
            margin: 0 0 10px 10px;
            list-style: none;
        }

        ul li {
            padding-right: 10px;
            color: #fff;
        }

        a {
            color: #fff;
        }

        a:hover{
            color: #6A5ACD;
            transition: 0.5s;
            font-size: 2rem;
        }

    }
`