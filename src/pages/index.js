import Head from "next/head";
import Doctors from "../components/Doctors";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Diva Care</title>
                <script type="application/ld+json">
                    {/** TODO: Page Specific SEO */}
                </script>
            </Head>
            <Landing />
            <Services />
            <Doctors />
            <Contact />
        </>
    );
}
