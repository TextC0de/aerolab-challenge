import styled from 'styled-components';

import { textPalette } from '@src/utils/styled';

const fontSize = ({ level }: { level?: number }): number => {
    switch (level) {
        case 1:
            return 2.5;
        case 2:
            return 2.25;
        default:
            return 2.5;
    }
};

type Props = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = styled.h1<Props>`
    color: ${textPalette('primary')};
    font-size: ${fontSize}rem;
    margin: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
`;

export default Heading;
