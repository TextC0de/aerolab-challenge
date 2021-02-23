import styled from 'styled-components';

import Flex from '@src/components/styled/Flex';
import Grid from '@src/components/styled/Grid';
import breakpoints from '@src/styles/breakpoints';

export const StyledProductsList = styled(Grid)`
    list-style: none;
`;

export const Filter = styled.div``;

export const Filters = styled(Flex)`
    padding-top: 3rem;
    margin-bottom: 2rem;

    ${Filter}:not(:last-child) {
        margin-bottom: 1rem;

        @media (min-width: ${breakpoints.sm}px) {
            margin-right: 1rem;
        }
    }
`;

export const PaginationArrow = styled.span`
    cursor: pointer;
    border: 1px solid rgb(43, 43, 43);
    border-radius: 50%;
    display: ${({ onClick }) => (!onClick ? 'none' : 'inline-flex')};
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &:hover {
        background: #ddd;
    }
`;

export const Pagination = styled(Flex)`
    margin: 2rem 0 3rem;
    border-top: 2px solid #ddd;
    padding-top: 1rem;

    svg {
        width: 0.375rem;
    }

    ${PaginationArrow} {
        &:first-child {
            margin-right: 0.375rem;

            svg {
                margin-right: 2px;
            }
        }

        &:last-child {
            svg {
                margin-left: 2px;
            }
        }
    }
`;

export const PaginationCount = styled.span`
    font-size: 0.875rem;
`;

export const PaginationNavigation = styled.div`
    margin-left: auto;
`;
