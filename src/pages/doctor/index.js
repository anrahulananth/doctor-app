import Head from "next/head";

export default function Profile() {
    return (
        <>
            <Head>
                <title>Diva Care | Profile</title>
                <script type="application/ld+json">
                    {/** TODO: Page Specific SEO */}
                </script>
            </Head>
            <div className="flex-1">
                <div className="py-2 lg:py-6 sm:py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">Your Profile</h1>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    </div>
                </div>
            </div>
        </>
    );
}
