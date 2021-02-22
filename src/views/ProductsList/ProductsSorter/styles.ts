import styled from 'styled-components';

import FlexItem from '@src/components/styled/FlexItem';
import { ifProp } from '@src/utils/styled';

type FilterProps = {
    isSelected: true | undefined;
};

export const Filter = styled(FlexItem)<FilterProps>`
    cursor: pointer;
    padding: 0.475rem 0.875rem;
    border-radius: 25px;
    background: ${ifProp<FilterProps>('isSelected', '#00d1fe', '#dedede')};
    color: ${ifProp<FilterProps>('isSelected', '#fff', '#a2a2a2 ')};
    transition: 0.3s ease-in-out;

    &:hover {
        background: rgba(42, 219, 249, 0.53);
        color: #fff;
    }
`;
