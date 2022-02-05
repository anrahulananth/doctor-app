import { useState } from "react";
import GlobalTheme from "../styles/GlobalTheme";
import {
    Layout as GlobalLayout,
    DoctorLayout
}from "../layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/global.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 20,
            },
        },
    }));
    const router = useRouter();
    const Layout = router.route.includes("/doctor") ? DoctorLayout : GlobalLayout;
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GlobalTheme>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </GlobalTheme>
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
