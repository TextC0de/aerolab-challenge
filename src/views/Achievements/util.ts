import { User } from '@src/api/types';
import { parseDate } from '@src/utils/common';

type Achievement = {
    key: string;
    title: string;
    description: string;
};

const milestones = [
    {
        redeems: 5,
        title: 'I want it',
        description: 'You have reached 5 redeems'
    },
    {
        redeems: 100,
        title: 'Supreme redeemer',
        description: 'You have reached 100 redeems. ¿How did you even get here?'
    }
];

const getUserAchievements = (user: User | undefined): Achievement[] => {
    if (!user) return [];

    const achievements = [];
    achievements.push({
        key: 'welcome',
        title: `Welcome - ${parseDate(user.createDate)}`,
        description: 'You became a member of Marketch'
    });

    if (user?.redeemHistory && user.redeemHistory.length !== 0) {
        achievements.push({
            key: 'first-redeem',
            title: `Getting started - ${parseDate(
                user.redeemHistory[0].createDate
            )}`,
            description: 'Your first redeem!'
        });

        const noRedeems = user.redeemHistory.length;
        milestones.forEach((milestone) => {
            if (noRedeems >= milestone.redeems) {
                achievements.push({
                    key: `${milestone.redeems}-redeems`,
                    title: `${milestone.title} - ${parseDate(
                        user.redeemHistory[milestone.redeems - 1].createDate
                    )}`,
                    description: milestone.description
                });
            }
        });
    }

    return achievements;
};

export default getUserAchievements;
