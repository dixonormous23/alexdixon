import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/theme';
import { NavbarMenuContextProvider } from '@/context/NavbarMenuContext';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <NavbarMenuContextProvider>
                <Component {...pageProps} />
            </NavbarMenuContextProvider>
        </ThemeProvider>
    );
};

export default App;
