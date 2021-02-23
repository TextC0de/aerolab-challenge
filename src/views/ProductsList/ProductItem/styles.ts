import styled, { css } from 'styled-components';

import Button from '@src/components/styled/Button';
import Flex from '@src/components/styled/Flex';
import breakpoints from '@src/styles/breakpoints';
import { ifProp, palette } from '@src/utils/styled';

export const ProductItemDetails = styled.div`
    padding: 0.375rem 0 0;

    ${Button} {
        margin-top: 1rem;
        border-radius: 5px;
        width: 100%;

        @media (min-width: ${breakpoints.md}px) {
            display: none;
        }
    }
`;

export const ProductItemCategory = styled.span`
    font-size: 0.875rem;
    color: #a3a3a3;
`;

export const ProductItemName = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
`;

export const RedeemWrapper = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: 0.3s ease-in-out;
    display: none;

    @media (min-width: ${breakpoints.md}px) {
        display: flex;
    }
`;

type CostProps = {
    canBuy: boolean;
};

export const Cost = styled.span<CostProps>`
    margin-top: 0.375rem;
    font-size: 1rem;
    color: ${({ theme }) =>
        ifProp(
            'canBuy',
            palette('primary')({
                theme
            }),
            '#999'
        )};
    margin-bottom: 0.375rem;
    display: block;
    display: flex;
    align-items: center;

    svg {
        ${ifProp(
            'canBuy',
            undefined,
            css`
                filter: brightness(75%);
            `
        )};
        margin-right: 4px;
        width: 0.875rem;
        height: 0.875rem;
    }
`;

export const MissingPoints = styled.span`
    margin-top: 0.875rem;
    padding-top: 0.875rem;
    border-top: 1px solid #ececec;
    color: #999;
    font-size: 0.875rem;
    display: flex;
    align-items: flex-end;

    .IconCoin {
        margin: 0 1px 0 4px;
        width: 1rem;
        height: 1rem;
    }
`;

export const StyledProductItem = styled.li`
    background: #fff;
    position: relative;
    box-shadow: 0 0 1px 1px #dedede;
    border-radius: 5px;
    padding: 1rem;
    overflow: hidden;

    img {
        width: 100%;
    }

    &:hover,
    &:focus,
    &:active {
        border-color: transparent;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

        ${RedeemWrapper} {
            opacity: 1;
        }
    }
`;

export const CantRedeem = styled.span`
    color: #fff;
    padding: 0 1rem;
    text-align: center;
    font-weight: 600;
    line-height: 1.5rem;
`;
