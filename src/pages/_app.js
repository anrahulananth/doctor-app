import GlobalTheme from "../styles/GlobalTheme";
import Layout from "../layout/Layout";
import  "../styles/global.css";

function MyApp({ Component, pageProps }) {
    return (
        <GlobalTheme>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalTheme>
    );
}

export default MyApp;
