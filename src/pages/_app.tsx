import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { ThemeProvider } from 'styled-components';

import Header from '@src/components/layout/Header';
import UserContextProvider from '@src/context/UserContext';
import ResetStyle from '@src/styles/ResetStyle';
import theme from '@src/styles/theme';

const App: React.FC<AppPropsType> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <UserContextProvider>
                <Header />
                <Component {...pageProps} />
            </UserContextProvider>
        </ThemeProvider>
    );
};

export default App;
