'use client';

import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

import store from '../../store';

import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';

const App = dynamic(() => import('../../App'), { ssr: false });

export function ClientOnly() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
}
