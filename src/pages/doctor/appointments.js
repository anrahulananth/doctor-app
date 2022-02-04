import Head from "next/head";
import { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";

export default function Appointments() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <Head>
                <title>Diva Care | Doctor | Appointments</title>
                <script type="application/ld+json">
                    {/** TODO: Page Specific SEO */}
                </script>
            </Head>
            <div className="flex-1">
                <div className="py-2 lg:py-6 sm:py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
                        <div className="my-8 text-text3">
                            <h2 className="font-semibold">
                                Choose Date
                            </h2>
                            <div className="py-4 flex">
                                <DatePicker onChange={onChange} value={value} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
