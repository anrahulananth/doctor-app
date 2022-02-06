import { useState } from "react";
import GlobalTheme from "../styles/GlobalTheme";
import Layout from "../layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 20,
            },
        },
    }));
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GlobalTheme>
                    <Layout>
                        <main className="bg-background3 min-h-screen">
                            <Component {...pageProps} />
                        </main>
                    </Layout>
                </GlobalTheme>
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
