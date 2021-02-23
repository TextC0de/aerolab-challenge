import { useContext } from 'react';

import { UserContext } from '@src/context/UserContext';

import RedeemItem from './RedeemItem';
import { StyledRedeemHistoryList } from './styles';

const RedeemHistoryList: React.FC = () => {
    const { state } = useContext(UserContext);

    if (!state.user) {
        return null;
    }

    return (
        <StyledRedeemHistoryList>
            {state.user.redeemHistory
                .sort((a, b) => (a.createDate > b.createDate ? 0 : 1))
                .map((redeem) => (
                    <RedeemItem key={redeem._id} redeem={redeem} />
                ))}
        </StyledRedeemHistoryList>
    );
};

export default RedeemHistoryList;
