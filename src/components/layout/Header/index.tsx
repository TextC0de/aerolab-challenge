import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import { useContext } from 'react';

import AerolabLogo from '@src/components/icons/Aerolab';
import IconCoin from '@src/components/icons/Coin';
import Container from '@src/components/styled/Container';
import Flex from '@src/components/styled/Flex';
import { UserContext } from '@src/context/UserContext';

import { MyProfile, StyledHeader, UserInfo, UserPoints } from './style';

const Header: React.FC = () => {
    const { user } = useContext(UserContext);

    return (
        <StyledHeader>
            <Container>
                <Flex xs={{ alignCenter: true }}>
                    <Link href="/" passHref>
                        <a>
                            <AerolabLogo />
                        </a>
                    </Link>

                    <Link href="/account" passHref>
                        <MyProfile>
                            <Icon
                                path={mdiAccount}
                                title="Profile"
                                size={1}
                                horizontal
                            />{' '}
                            {user?.name}
                        </MyProfile>
                    </Link>

                    <UserInfo>
                        <UserPoints>
                            <IconCoin /> {user?.points}
                        </UserPoints>
                    </UserInfo>
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;
