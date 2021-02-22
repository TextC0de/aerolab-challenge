import styled from 'styled-components';

import Grid from '@src/components/styled/Grid';

export const StyledAchievements = styled(Grid)``;

export const Achievement = styled.li`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #f2f2f2;
    padding: 0.875rem;
    border-radius: 4px;
    background: #fff;
`;

export const AchievementTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.375rem;
`;

export const AchievementDescription = styled.span`
    font-size: 0.875rem;
`;
