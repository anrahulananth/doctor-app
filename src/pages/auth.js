import Head from "next/head";
import Auth from "../components/Auth";

export default function AuthContainer() {
    return (
        <>
            <Head>
                <title>Diva Care | Log In | Register</title>
                <script type="application/ld+json">
                    {/** TODO: Page Specific SEO */}
                </script>
            </Head>
            <Auth />
        </>
    );
}
