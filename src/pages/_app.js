import App from "next/app";
import { useState } from "react";
import GlobalTheme from "../styles/GlobalTheme";
import Layout from "../layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/global.css";
import { parseCookies } from "../utils/commonUtils";
import AppStateProvider from "../context/AppStateProvider";

function MyApp({ Component, pageProps, appCookies }) {
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
                    <AppStateProvider appCookies={appCookies}>
                        <Layout>
                            <main className="bg-background3 min-h-screen">
                                <Component {...pageProps} />
                            </main>
                        </Layout>
                    </AppStateProvider>
                </GlobalTheme>
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            </QueryClientProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const reqObj = appContext?.ctx?.req;
    return { ...appProps, appCookies: parseCookies(reqObj) };
};

export default MyApp;
