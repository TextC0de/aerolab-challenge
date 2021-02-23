import Image from 'next/image';
import React from 'react';

import { Product } from '@src/api/types';
import IconCoin from '@src/components/icons/Coin';
import Button from '@src/components/styled/Button';

import {
    CantRedeem,
    Cost,
    ImageWrapper,
    MissingPoints,
    ProductItemDetails,
    ProductItemName,
    RedeemWrapper,
    StyledProductItem
} from './styles';

type Props = {
    product: Product;
    missing: number | undefined;
    redeeming: boolean;
};

const ProductItem: React.FC<Props> = ({ product, missing, redeeming }) => (
    <StyledProductItem tabIndex={0}>
        <ImageWrapper>
            <Image
                src={product.img.url}
                alt={product.name}
                width={252}
                height={182}
            />
        </ImageWrapper>
        <ProductItemDetails>
            <ProductItemName>{product.name}</ProductItemName>

            <Cost canBuy={!missing}>
                <IconCoin /> {product.cost}
            </Cost>

            {missing ? (
                <MissingPoints>
                    You&apos;re missing <IconCoin />
                    {missing}
                </MissingPoints>
            ) : (
                <Button data-product={product._id}>Redeem now</Button>
            )}
        </ProductItemDetails>

        <RedeemWrapper
            xs={{ column: true, alignCenter: true, justifyCenter: true }}
        >
            {redeeming ? (
                <CantRedeem>
                    There&apos;s a redeeming process going on
                </CantRedeem>
            ) : missing ? (
                <CantRedeem>You can&apos;t redeem this product yet</CantRedeem>
            ) : (
                <Button data-product={product._id}>Redeem now</Button>
            )}
        </RedeemWrapper>
    </StyledProductItem>
);

export default ProductItem;
