import styled from 'styled-components';

import Heading from '@src/components/styled/Heading';
import P from '@src/components/styled/P';

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 3rem;
`;

type Props = {
    fullPage?: boolean;
    title?: string;
    message?: string;
};

const ViewError: React.FC<Props> = ({ fullPage, title, message }) => (
    <ErrorContainer style={fullPage ? { minHeight: '100vh' } : undefined}>
        <Heading as="h4" level={4}>
            {title || "We're sorry, something went wrong"}
        </Heading>
        <P>{message || 'Please, come back later or reload the page'}</P>
    </ErrorContainer>
);

export default ViewError;
