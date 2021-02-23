import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';

import AerolabLogo from '@src/components/icons/Aerolab';
import IconCoin from '@src/components/icons/Coin';
import Container from '@src/components/styled/Container';
import Flex from '@src/components/styled/Flex';
import { UserContext } from '@src/context/UserContext';

import { MyProfile, StyledHeader, UserInfo, UserPoints } from './styles';

const Header: React.FC = () => {
    const { state } = useContext(UserContext);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            document.body.style.paddingTop = `${ref.current.clientHeight}px`;
        }
    }, []);

    return (
        <StyledHeader id="mainHeader" ref={ref}>
            <Container>
                <Flex xs={{ alignCenter: true }}>
                    <Link href="/" passHref>
                        <a>
                            <AerolabLogo />
                        </a>
                    </Link>

                    {state.user && (
                        <>
                            <Link href="/account" passHref>
                                <MyProfile>
                                    <Icon
                                        path={mdiAccount}
                                        title="Profile"
                                        size={1}
                                        horizontal
                                    />{' '}
                                    {state.user.name}
                                </MyProfile>
                            </Link>

                            <UserInfo>
                                <UserPoints>
                                    <IconCoin /> {state.user.points}
                                </UserPoints>
                            </UserInfo>
                        </>
                    )}
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;
