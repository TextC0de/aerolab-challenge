import { NextPage } from 'next';
import { useContext } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import ViewLoading from '@src/components/layout/ViewLoading';
import Seo from '@src/components/Seo';
import Container from '@src/components/styled/Container';
import Heading from '@src/components/styled/Heading';
import P from '@src/components/styled/P';
import Section from '@src/components/styled/Section';
import { UserContext } from '@src/context/UserContext';
import { parseDate } from '@src/utils/common';
import Achievements from '@src/views/Achievements';
import PointsAsker from '@src/views/PointsAsker';
import RedeemHistoryList from '@src/views/RedeemHistoryList';

const Account: NextPage = () => {
    const { state } = useContext(UserContext);

    if (state.loading) {
        return <ViewLoading fullPage />;
    }

    if (state.error || !state.user) {
        return <ViewLoading fullPage />;
    }

    const { user } = state;

    return (
        <>
            <Seo />
            <main>
                <Section>
                    <Container>
                        <Heading>{user.name}</Heading>
                        <P>
                            Member since:{' '}
                            {user.createDate && parseDate(user.createDate)}
                        </P>
                        <P>Points: {user.points}</P>
                        <ToastProvider>
                            <PointsAsker />
                        </ToastProvider>
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
            </main>
        </>
    );
};

export default Account;
