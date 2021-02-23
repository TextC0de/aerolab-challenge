import styled from 'styled-components';

import Spinner from '@src/components/styled/Spinner';

const LoadingContainer = styled.div`
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 3rem 0;
`;

type Props = {
    size?: number;
    fullPage?: boolean;
};

const ViewLoading: React.FC<Props> = ({ size, fullPage }) => (
    <LoadingContainer style={fullPage ? { minHeight: '100vh' } : undefined}>
        <Spinner size={size} />
    </LoadingContainer>
);

ViewLoading.displayName = 'ViewLoading';

export default ViewLoading;
