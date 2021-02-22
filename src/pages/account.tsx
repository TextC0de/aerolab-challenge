import { NextPage } from 'next';
import { useContext } from 'react';

import { addMorePoints } from '@src/api/post';
import Seo from '@src/components/Seo';
import Button from '@src/components/styled/Button';
import Container from '@src/components/styled/Container';
import Heading from '@src/components/styled/Heading';
import Section from '@src/components/styled/Section';
import { UserContext } from '@src/context/UserContext';
import { parseDate } from '@src/utils/common';
import Achievements from '@src/views/Achievements';
import RedeemHistoryList from '@src/views/RedeemHistoryList';

const Account: NextPage = () => {
    const { user } = useContext(UserContext);

    const getMorePoints = () => {
        if (process.env.NODE_ENV === 'production') return;
        addMorePoints(7500)
            .then(({ data: message }) => {
                // eslint-disable-next-line no-console
                console.log(message);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <>
            <Seo />
            <main>
                <Section>
                    <Container>
                        <Heading>My personal data</Heading>
                        <p>Name: {user?.name}</p>
                        <p>
                            Member since:{' '}
                            {user?.createDate && parseDate(user?.createDate)}
                        </p>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <Heading as="h2" level={2}>
                            Achievements
                        </Heading>
                        <Achievements />
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <Heading as="h2" level={2}>
                            Redeem history
                        </Heading>
                        <RedeemHistoryList />
                    </Container>
                </Section>

                {process.env.NODE_ENV === 'development' && (
                    <Container>
                        <Button
                            style={{
                                border: '1px solid #333',
                                marginBottom: '3rem'
                            }}
                            onClick={getMorePoints}
                        >
                            Pedir más puntos
                        </Button>
                    </Container>
                )}
            </main>
        </>
    );
};

export default Account;
