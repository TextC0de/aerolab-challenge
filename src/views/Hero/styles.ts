import styled from 'styled-components';

import Flex from '@src/components/styled/Flex';

export const StyledCategoryHero = styled.header`
    position: relative;
    background-position: bottom right;
    background-size: cover;
    background-color: #15dbff;
    background-image: ${process.env.NODE_ENV === 'production'
        ? "url('/_public-static/header-x1.png')"
        : "url('/header-x1.png')"};

    &,
    ${Flex} {
        min-height: 50vh;
    }

    ${Flex} {
        padding-bottom: 3rem;
    }
`;

export const ContrastBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`;

export const Content = styled(Flex)`
    position: relative;
`;

export const CategoryHeroTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
`;
