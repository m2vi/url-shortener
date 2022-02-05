import '@styles/globals.css';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import nProgress from 'nprogress';
import Head from 'next/head';
import Full from '@components/Full';
import { ModalProvider } from 'context/useModal';
import { ToastContainer } from 'react-toastify';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalProvider>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <Full className='px-120 h-screen w-full max-w-screen-2xl'>
        <Component {...pageProps} />
      </Full>
      <ToastContainer hideProgressBar={true} limit={5} theme='dark' />
    </ModalProvider>
  );
};

export default MyApp;
