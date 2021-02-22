import React, { useContext } from 'react';

import { UserContext } from '@src/context/UserContext';

import {
    Achievement,
    AchievementDescription,
    AchievementTitle,
    StyledAchievements
} from './styles';
import getUserAchievements from './util';

const Achievements: React.FC = () => {
    const { user } = useContext(UserContext);

    return (
        <StyledAchievements
            xs={{ gap: 1, columns: 1 }}
            sm={{ columns: 2 }}
            md={{ columns: 3 }}
            lg={{ columns: 4 }}
        >
            {getUserAchievements(user).map((achievement) => (
                <Achievement key={achievement.key}>
                    <AchievementTitle>{achievement.title}</AchievementTitle>
                    <AchievementDescription>
                        {achievement.description}
                    </AchievementDescription>
                </Achievement>
            ))}
        </StyledAchievements>
    );
};

export default Achievements;
