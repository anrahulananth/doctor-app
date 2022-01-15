import GlobalTheme from "../styles/GlobalTheme";
import Layout from "../layout/Layout";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 20,
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalTheme>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </GlobalTheme>
        </QueryClientProvider>
    );
}

export default MyApp;
