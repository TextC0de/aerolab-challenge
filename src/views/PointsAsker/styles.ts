import styled from 'styled-components';

import breakpoints from '@src/styles/breakpoints';

export const StyledPointsAsker = styled.div`
    margin-top: 1.5rem;

    ol {
        li:not(:last-child) {
            margin: 0 0 0.375rem 0;

            @media (min-width: ${breakpoints.sm}px) {
                margin: 0 0.375rem 0 0;
            }
        }
    }
`;

export const PointsAskerItem = styled.li`
    border: 2px solid;
    padding: 0.375rem 0.875rem;
    font-weight: 600;
    text-align: center;
    font-size: 0.775rem;
    border-radius: 5px;
    min-width: 75px;
    background: #fff;
    cursor: pointer;
    transition: 0.15s ease-in-out;

    &:hover,
    &:active,
    &:focus {
        background: #eee;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    }
`;
