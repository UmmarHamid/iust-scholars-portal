import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Database } from '../types/supabase';

export default function App({ Component, pageProps }: AppProps) {
  const supabaseClient = createPagesBrowserClient<Database>();
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
}
