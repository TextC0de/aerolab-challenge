import { NextPage } from 'next';
import { ToastProvider } from 'react-toast-notifications';

import { getProducts } from '@src/api/get';
import { Product } from '@src/api/types';
import Seo from '@src/components/Seo';
import Container from '@src/components/styled/Container';
import CategoryHero from '@src/views/CategoryHero';
import ProductsList from '@src/views/ProductsList';

type Props = {
    products: Product[];
};

const Home: NextPage<Props> = ({ products }) => (
    <>
        <Seo />
        <main>
            <CategoryHero category="Electronics" />
            <section>
                <Container>
                    <ToastProvider>
                        <ProductsList products={products} />
                    </ToastProvider>
                </Container>
            </section>
        </main>
    </>
);

export const getStaticProps = async (): Promise<{
    props: { products: Product[] };
    revalidate: number;
}> => {
    let response: Product[];

    try {
        response = (await getProducts()).data;
    } catch (e) {
        console.error(e);
        response = [];
    }

    return {
        props: {
            products: response
        },
        revalidate: 60
    };
};

export default Home;
