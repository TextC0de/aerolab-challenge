import styled, { DefaultTheme } from 'styled-components';

import { backgroundPalette } from '@src/utils/styled';

type Props = {
    primary?: boolean;
    secondary?: boolean;
};

const background = (
    props: Props & { theme: DefaultTheme }
): string | undefined => {
    if (props.primary) {
        return backgroundPalette('primary')({ theme: props.theme });
    }

    if (props.secondary) {
        return backgroundPalette('secondary')({ theme: props.theme });
    }

    return undefined;
};

const Section = styled.section<Props>`
    padding: 1.5rem 0;
    background: ${background};

    h2 {
        margin-bottom: 1rem;
        position: relative;
        display: inline-block;
        text-transform: capitalize;
    }
`;

export default Section;
