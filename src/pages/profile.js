import Head from "next/head";
import Policy from "../components/Policy";
import AppointmentProvider from "../context/AppointmentProvider";

function Profile() {
    return (
        <>
            <Head>
                <title>Diva Care | Your Profile</title>
                <script type="application/ld+json">
                    {/** TODO: Page Specific SEO */}
                </script>
            </Head>
            <AppointmentProvider>
                <Policy />
            </AppointmentProvider>
        </>
    );
}

export default Profile;
