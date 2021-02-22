import Container from '@src/components/styled/Container';
import Flex from '@src/components/styled/Flex';

import { CategoryHeroTitle, StyledCategoryHero } from './styles';

type Props = {
    category: string;
};

const CategoryHero: React.FC<Props> = ({ category }) => (
    <StyledCategoryHero>
        <Flex xs={{ alignEnd: true }}>
            <Container>
                <CategoryHeroTitle>{category}</CategoryHeroTitle>
            </Container>
        </Flex>
    </StyledCategoryHero>
);

export default CategoryHero;
