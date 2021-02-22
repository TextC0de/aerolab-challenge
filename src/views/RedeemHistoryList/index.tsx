import { useContext } from 'react';

import { UserContext } from '@src/context/UserContext';

import RedeemItem from './RedeemItem';
import { StyledRedeemHistoryList } from './styles';

const RedeemHistoryList: React.FC = () => {
    const { user } = useContext(UserContext);

    return (
        <StyledRedeemHistoryList>
            {user?.redeemHistory.map((redeem) => (
                <RedeemItem key={redeem._id} redeem={redeem} />
            ))}
        </StyledRedeemHistoryList>
    );
};

export default RedeemHistoryList;
