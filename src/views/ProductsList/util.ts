import { Product } from '@src/api/types';

export const getFilteredProducts = (
    products: Product[],
    filter: string,
    sortBy: string
): Product[] => {
    const sortable =
        filter && filter !== 'All'
            ? products.filter(({ category }) => category === filter)
            : [...products];

    if (sortBy === 'newest') return sortable;
    const getSortFunction = (): ((a: Product, b: Product) => number) => {
        switch (sortBy) {
            case 'lower-price':
                return (a, b) => a.cost - b.cost;
            case 'highest-price':
                return (a, b) => b.cost - a.cost;
            default:
                return () => 0;
        }
    };

    return sortable.sort(getSortFunction());
};
