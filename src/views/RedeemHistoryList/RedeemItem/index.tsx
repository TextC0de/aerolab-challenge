import { Redeem } from '@src/api/types';
import IconCoin from '@src/components/icons/Coin';
import { parseDate } from '@src/utils/common';

import {
    RedeemCost,
    RedeemDate,
    RedeemDetails,
    RedeemImage,
    RedeemName,
    StyledRedeemItem
} from './styles';

type Props = {
    redeem: Redeem;
};

const RedeemItem: React.FC<Props> = ({ redeem }) => {
    return (
        <StyledRedeemItem as="li" xs={{ alignCenter: true }}>
            <RedeemImage>
                <img src={redeem.img.url} alt={redeem.name} />
            </RedeemImage>
            <RedeemDetails>
                <RedeemName>{redeem.name}</RedeemName>
                <RedeemDate>
                    <strong>Date:</strong> {parseDate(redeem.createDate)}
                </RedeemDate>
                <RedeemCost>
                    <IconCoin />
                    {redeem.cost}
                </RedeemCost>
            </RedeemDetails>
        </StyledRedeemItem>
    );
};

export default RedeemItem;
