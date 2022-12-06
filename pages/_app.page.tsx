import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { theme } from "dh-marvel/styles/material-theme";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutGeneral>
          <Component {...pageProps} />
        </LayoutGeneral>
        <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */

        #__next {
          height: 100%;
        }
      `}</style>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
