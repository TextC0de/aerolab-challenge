import styled from 'styled-components';

export const StyledHeader = styled.header`
    top: 0;
    left: 0;
    right: 0;
    padding: 0.875rem 0;
    z-index: 10;
    background: #fff;

    .AerolabLogo {
        width: 1.5rem;
        transition: 0.15s ease-in-out;

        &:hover {
            opacity: 0.3;
        }
    }
`;

export const MyProfile = styled.a`
    color: #6a6a6a;
    display: flex;
    align-items: center;
    margin-left: auto;
    font-size: 0.775rem;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.15s ease-in-out;

    svg {
        border: 1px solid #6a6a6a;
        border-radius: 50%;
        margin-right: 0.375rem;
        padding: 0.2rem;
    }

    &:hover {
        opacity: 0.3;
    }
`;

export const UserInfo = styled.div`
    margin-left: 1rem;
`;

export const UserPoints = styled.span`
    padding: 0.375rem 0.875rem;
    padding-right: 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    background: #efefef;
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #6a6a6a;

    .IconCoin {
        width: 1.125rem;
        height: 1.125rem;
        margin-right: 4px;
    }
`;
