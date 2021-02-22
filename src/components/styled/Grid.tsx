import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

import breakpoints from '@src/styles/breakpoints';

type Options = {
    gap?: number;
    columns?: number;
};

type Props = {
    [key in keyof typeof breakpoints]?: Options;
};

export const getBreakpointStyles = (
    options: Options
): FlattenSimpleInterpolation => css`
    ${options.columns &&
    `
        grid-template-columns: repeat(${options.columns}, 1fr);
    `}

    ${options.gap &&
    `
        grid-gap: ${options.gap}rem;
    `}
`;

const Grid = styled.ul<Props>`
    display: grid;
    min-height: 0;
    min-width: 0;

    li {
        min-width: 0;
    }

    ${(props) =>
        Object.keys(breakpoints).map((key) => {
            const options = props[key];
            return options
                ? css`
                      @media (min-width: ${breakpoints[key]}px) {
                          ${getBreakpointStyles(options)}
                      }
                  `
                : undefined;
        })}
`;

export default Grid;
