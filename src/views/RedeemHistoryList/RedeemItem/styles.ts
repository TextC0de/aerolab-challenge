import styled from 'styled-components';

import Flex from '@src/components/styled/Flex';
import breakpoints from '@src/styles/breakpoints';

export const StyledRedeemItem = styled(Flex)`
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background: #fff;
`;

export const RedeemImage = styled.div`
    width: 25%;

    @media (min-width: ${breakpoints.md}px) {
        width: 10%;
    }
`;

export const RedeemDetails = styled.div`
    padding-left: 1rem;

    width: 75%;

    @media (min-width: ${breakpoints.md}px) {
        width: 90%;
    }
`;

export const RedeemName = styled.h3`
    font-size: 1rem;
    font-weight: 600;
`;

export const RedeemCost = styled.span`
    font-size: 0.875rem;
    display: flex;
    align-items: center;

    .IconCoin {
        margin-right: 4px;
        width: 1rem;
    }
`;

export const RedeemDate = styled.span`
    margin: 0.25rem 0 0.875rem;
    font-size: 0.775rem;
    display: block;
`;
