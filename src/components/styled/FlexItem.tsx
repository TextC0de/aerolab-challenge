import styled, { css } from 'styled-components';

import breakpoints from '@src/styles/breakpoints';
import { ifProp } from '@src/utils/styled';

type Options = {
    size?: number;
};

type Props = {
    [key in keyof typeof breakpoints]?: Options;
};

const getStyles = (options: Options) => css`
    ${ifProp<Options>(
        'size',
        css`
            flex: ${options.size};
        `
    )(options)}
`;

const FlexItem = styled.div<Props>`
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

export default FlexItem;
