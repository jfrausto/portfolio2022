import { ChakraProvider } from '@chakra-ui/react';
import { withTRPC } from '@trpc/next';
import theme from '../theme';
import { AppProps } from 'next/app';
import { AppRouter } from '../server/router/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
    <Head>
      <title>Jesse Frausto: Web Dev</title>
      <meta property="og:title" content="Jesse Frausto: Web Dev" key="title" />
    </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  // false for now!
  ssr: false,
})(MyApp);
