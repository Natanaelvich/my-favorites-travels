import AppProvider from '@/hooks';
import Globalstyles from '@/styles/Globalstyles';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Globalstyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
