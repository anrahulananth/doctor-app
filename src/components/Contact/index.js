import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Example() {
    return (
        <section id="contact" className="relative overflow-hidden">
            <div className="relative w-full h-full">
                <img
                    className="w-full h-full"
                    src="/assets/images/location-screenshot.png" alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative max-w-xl mx-auto px-4 lg:max-w-7xl">
                        <div className="relative overflow-hidden bg-white max-w-xl mt-10 px-10 py-10 rounded-lg">
                            <h3 className="text-lg font-bold">Contact Us</h3>
                            <p className="mt-6 text-base max-w-3xl">
                            </p>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">Location</span>
                                </dt>
                                <dd className="flex text-base">
                                    <HiOutlineLocationMarker className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3 font-bold">Location</span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Phone number</span>
                                </dt>
                                <dd className="flex text-base">
                                    <span className="ml-6">No. 1 HAL Second Stage, Near Domlur Flyover, 100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560008</span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Phone number</span>
                                </dt>
                                <dd className="flex text-base">
                                    <HiOutlinePhone className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3 font-bold">Phone number</span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Phone number</span>
                                </dt>
                                <dd className="flex text-base">
                                    <span className="ml-6">+91-80653221</span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base">
                                    <HiOutlineMail className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3 font-bold">Email ID</span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base">
                                    <span className="ml-6">consultation@divacare.in</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
