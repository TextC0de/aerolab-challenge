import Container from '@src/components/styled/Container';

import {
    CategoryHeroTitle,
    Content,
    ContrastBg,
    StyledCategoryHero
} from './styles';

type Props = {
    category: string;
};

const Hero: React.FC<Props> = ({ category }) => (
    <StyledCategoryHero>
        <ContrastBg />
        <Content xs={{ alignEnd: true }}>
            <Container>
                <CategoryHeroTitle>{category}</CategoryHeroTitle>
            </Container>
        </Content>
    </StyledCategoryHero>
);

export default Hero;
