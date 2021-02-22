import { createGlobalStyle } from 'styled-components';

import { backgroundPalette, palette, textPalette } from '@src/utils/styled';

const ResetStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        min-height: 100vh;
        line-height: 1.15;
        font-family: ${({ theme }): string => theme.fonts[0]}, sans-serif;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        color: ${textPalette('secondary')};
        background-color: ${backgroundPalette('primary')};
    }

    p, span, h1, h2, h3, h4,  h5, h6 {
        font-weight: 400;
        padding: 0;
        margin: 0;
    }


    main {
        outline: none;
    }

    article,
    figure,
    footer,
    header,
    main,
    nav,
    section {
        display: block;
    }

    canvas {
        max-width: 100%;
    }

    button {
        margin: 0;
        border: 0;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .twitter-tweet iframe {
        width: 100% !important;
    }

    img {
        max-width: 100%;
    }

    .Dropdown-control {
        min-width: 10rem;
        padding: 0.875rem 2.125rem .875rem .875rem;
        border-radius: 8px;
        cursor: pointer;
        transition: 0;
        color: #6e6d7a;

        &:hover {
            background: #fcfcfc;
            color: #2a2a2a;
        }
    }

    .Dropdown-arrow {
        top: 1.3rem;
        right: 1rem;
    }

    .Dropdown-menu {
        margin-top: .375rem;
        border-radius: 5px;
        font-size: .875rem;
    }

    .Dropdown-option {
        color: #6e6d7a;
        padding: .875rem;

        &:hover {
            color: #6e6d7a;
            background: #e7e7e9;
        }

        &.is-selected {
            background: transparent;
            color: ${palette('primary')};
            font-weight: 700;

            &:hover {
                color: ${palette('primary')};
                background: #e7e7e9;
            }
        }
    }

    .Dropdown-root {
        &.is-open {
            .Dropdown-control {
                color: #2a2a2a;
            }
        }
    }

    .IconCoin {
        margin-right: 4px;
        width: 1rem;
        height: .75rem;
    }
`;

export default ResetStyle;
