export type Product = {
    _id: string;
    name: string;
    cost: number;
    category: string;
    img: {
        url: string;
        hdUrl: string;
    };
};

export type Redeem = Product & {
    productId: string;
    createDate: string;
};

export type RedeemHistory = Redeem[];

export type User = {
    id: string;
    name: string;
    points: number;
    redeemHistory: RedeemHistory;
    createDate: string;
};
