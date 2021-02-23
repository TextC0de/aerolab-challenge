import 'react-dropdown/style.css';

import React, { useContext, useEffect, useState } from 'react';
import ReactDropdown, { Option } from 'react-dropdown';
import { useToasts } from 'react-toast-notifications';

import { baseAxios } from '@src/api/constants';
import { Product } from '@src/api/types';
import IconArrowChevron from '@src/components/icons/ArrowChevron';
import ViewError from '@src/components/layout/ViewError';
import ViewLoading from '@src/components/layout/ViewLoading';
import Label from '@src/components/styled/Label';
import P from '@src/components/styled/P';
import { UserContext } from '@src/context/UserContext';

import { sorters } from './constants';
import ProductItem from './ProductItem';
import {
    Filter,
    Filters,
    Pagination,
    PaginationArrow,
    PaginationCount,
    PaginationNavigation,
    StyledProductsList
} from './styles';
import { getFilteredProducts } from './util';

const productsPerPage = 16;

type Props = {
    products: Product[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
    const { state, subtractPoints, updateRedeemHistory } = useContext(
        UserContext
    );
    const [sorting, setSorting] = useState<string>(sorters[0].value);
    const [filter, setFilter] = useState<string>('All');
    const [redeeming, setRedeeming] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const { addToast } = useToasts();

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).nodeName !== 'BUTTON' && !redeeming)
            return;
        e.preventDefault();

        const id = (e.target as HTMLButtonElement).attributes.getNamedItem(
            'data-product'
        )?.value;
        if (!id) return;

        const product = products.find(({ _id }) => _id === id);
        if (!product) return;

        addToast('Redeeming process started', { appearance: 'info' });
        setRedeeming(true);

        baseAxios
            .post('/redeem', {
                productId: id
            })
            .then(({ data: { message } }) => {
                updateRedeemHistory();
                subtractPoints(product.cost);
                addToast(message, { appearance: 'success' });
            })
            .catch((error) => {
                console.error(error);
                addToast('There was an error while redeeming the product', {
                    appearance: 'error'
                });
            })
            .finally(() => {
                setRedeeming(false);
            });
    };

    const filteredProducts = getFilteredProducts(products, filter, sorting);
    const pageProducts = filteredProducts.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

    useEffect(() => {
        document.getElementById('productsFilters')?.scrollIntoView();
    }, [page]);

    if (products.length === 0) {
        return <P>We couldn&apos;t find any products</P>;
    }

    if (state.loading) {
        return <ViewLoading />;
    }

    if (state.error || !state.user) {
        return (
            <ViewError title="Unauthorized" message="You must be logged in" />
        );
    }

    const { user } = state;

    return (
        <>
            <Filters
                id="productsFilters"
                xs={{ column: true }}
                sm={{ row: true }}
            >
                <Filter>
                    <Label>Category:</Label>
                    <ReactDropdown
                        options={['All'].concat(
                            [
                                ...new Set(
                                    products.map(({ category }) => category)
                                )
                            ].sort()
                        )}
                        value={filter}
                        onChange={({ value }: Option) => {
                            setPage(1);
                            setFilter(value);
                        }}
                    />
                </Filter>
                <Filter>
                    <Label>Sort by:</Label>
                    <ReactDropdown
                        options={sorters}
                        onChange={({ value }: Option) => setSorting(value)}
                        value={sorting}
                    />
                </Filter>
            </Filters>

            <StyledProductsList
                onClick={onClick}
                xs={{ gap: 1, columns: 1 }}
                sm={{ columns: 2 }}
                md={{ columns: 3 }}
                xl={{ columns: 4 }}
            >
                {pageProducts.map((product) => {
                    const missing = user.points - product.cost;
                    return (
                        <ProductItem
                            key={product._id}
                            product={product}
                            missing={missing < 0 ? -missing : undefined}
                            redeeming={redeeming}
                        />
                    );
                })}
            </StyledProductsList>

            <Pagination xs={{ justifyEnd: true, alignCenter: true }}>
                <PaginationCount>
                    {(page - 1) * productsPerPage + pageProducts.length} of{' '}
                    {filteredProducts.length}
                </PaginationCount>

                <PaginationNavigation>
                    <PaginationArrow
                        onClick={
                            page > 1
                                ? () => setPage((page) => page - 1)
                                : undefined
                        }
                    >
                        <IconArrowChevron direction="left" />
                    </PaginationArrow>
                    <PaginationArrow
                        onClick={
                            page * productsPerPage < filteredProducts.length
                                ? () => setPage((page) => page + 1)
                                : undefined
                        }
                    >
                        <IconArrowChevron direction="right" />
                    </PaginationArrow>
                </PaginationNavigation>
            </Pagination>
        </>
    );
};

export default ProductsList;
