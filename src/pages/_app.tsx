import AppProvider from 'hooks';
import Globalstyles from 'styles/Globalstyles';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Travel</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7159c1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Redressed&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Globalstyles />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
