import { createGlobalStyle } from 'styled-components';
import { COLOR_PALETTE } from '../const/theme';

export const Styles = createGlobalStyle`

    /* @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    } */


    body,
    html,
    a {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: ${COLOR_PALETTE.LEETECHO_LIGHT_BLUE};
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: ${COLOR_PALETTE.LEETECHO_INPUT_BACKGROUND};
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 32px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 30px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 28px;
        }
    };

    h2 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 28px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 28px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 26px;
        }
    }

    h3 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 26px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 24px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 22px;
        }
    }

    h4 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 24px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 22px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 20px;
        }
    }
    h5 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 22px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 20px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 18px;
        }
    }
    h6 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 20px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 18px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 16px;
        }
    }

    hr {
        margin: 1.2rem 0;
    }

    p {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
        color: ${COLOR_PALETTE.LEETECHO_BLACK};
        font-size: 15px;
        line-height: 1.41;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${COLOR_PALETTE.LEETECHO_BLUE};

        :hover {
            color: ${COLOR_PALETTE.LEETECHO_LIGHT_BLUE};
        }
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
