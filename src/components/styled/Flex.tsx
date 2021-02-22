import styled, {
    DefaultTheme,
    Interpolation,
    ThemeProps,
    css
} from 'styled-components';

import breakpoints from '@src/styles/breakpoints';
import { ifProp } from '@src/utils/styled';

type Options = {
    // Utils
    full?: boolean; //-> Sets width, height and flex basis to 100%
    inline?: boolean; // -> Sets the item to inline-flex
    center?: boolean; // -> Sets justify-content and align-items to center

    // Direction
    row?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    columnReverse?: boolean;

    // Wrap
    wrap?: boolean;
    wrapReverse?: boolean;

    // Align Items
    alignCenter?: boolean;
    alignStart?: boolean;
    alignEnd?: boolean;
    alignBaseline?: boolean;
    alignStretch?: boolean;

    // Align Content
    contentCenter?: boolean;
    contentStart?: boolean;
    contentEnd?: boolean;
    contentBaseline?: boolean;
    contentStretch?: boolean;
    contentAround?: boolean;

    // Justify Content
    justifyCenter?: boolean;
    justifyStart?: boolean;
    justifyEnd?: boolean;
    justifyBetween?: boolean;
    justifyAround?: boolean;
};

type Props = {
    [key in keyof typeof breakpoints]?: Options;
};

export const getStyles = (
    options: Options
): Interpolation<ThemeProps<DefaultTheme>> | undefined => {
    return css`
        // direction;
        ${ifProp<Options>(`row`, `flex-direction: row /* default */`)(options)};

        ${ifProp<Options>(
            `rowReverse`,
            `flex-direction: row-reverse`
        )(options)};

        ${ifProp<Options>(`column`, `flex-direction: column`)(options)};

        ${ifProp<Options>(
            `columnReverse`,
            `flex-direction: column-reverse`
        )(options)};

        // wrap;
        ${ifProp<Options>(`wrap`, `flex-wrap: wrap`)(options)};

        ${ifProp<Options>(`wrapReverse`, `flex-wrap: wrap-reverse`)(options)};

        // justify-content;
        ${ifProp<Options>(
            `justifyStart`,
            `justify-content: flex-start; /* default */`
        )(options)};

        ${ifProp<Options>(`justifyEnd`, `justify-content: flex-end`)(options)};

        ${ifProp<Options>(`justifyCenter`, `justify-content: center`)(options)};

        ${ifProp<Options>(
            `justifyBetween`,
            `justify-content: space-between`
        )(options)};

        ${ifProp<Options>(
            `justifyAround`,
            `justify-content: space-around`
        )(options)};

        // align-content;
        ${ifProp<Options>(
            `contentStart`,
            `align-content: flex-start`
        )(options)};

        ${ifProp<Options>(`contentEnd`, `align-content: flex-end`)(options)};

        ${ifProp<Options>(`contentCenter`, `align-content: center`)(options)};

        ${ifProp<Options>(
            `contentBaseline`,
            `align-content: baseline`
        )(options)};

        ${ifProp<Options>(
            `contentStretch`,
            `align-content: stretch; /* default */`
        )(options)};

        // align-items;
        ${ifProp<Options>(`alignStart`, `align-items: flex-start`)(options)};

        ${ifProp<Options>(`alignEnd`, `align-items: flex-end`)(options)};

        ${ifProp<Options>(`alignCenter`, `align-items: center`)(options)};

        ${ifProp<Options>(`alignBaseline`, `align-items: baseline`)(options)};

        ${ifProp<Options>(`alignStretch`, `align-items: stretch`)(options)};

        // utilities;
        ${ifProp<Options>(`inline`, `display: inline-flex;`)(options)};

        ${ifProp<Options>(
            'full',
            `
                width: 100%;
                height: 100%;
                flex-basis: 100%;
            `
        )(options)};

        ${ifProp<Options>(
            'center',
            `
                align-items: center;
                justify-content: center;
            `
        )(options)};
    `;
};

const Flex = styled.div<Props>`
    display: flex;
    justify-content: flex-start;

    ${(props) =>
        Object.keys(breakpoints).map((key) => {
            const options = props[key as keyof typeof breakpoints];
            if (!options) return undefined;
            return css`
                @media (min-width: ${breakpoints[
                        key as keyof typeof breakpoints
                    ]}px) {
                    ${getStyles(options)}
                }
            `;
        })}
`;

export default Flex;
