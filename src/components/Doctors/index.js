/* This example requires Tailwind CSS v2.0+ */
import { MdCheckCircle } from "react-icons/md";

const features = [
    "PreConception counselling",
    "Antenatal care",
    "Postnatal care",
    "Contraception",
    "Menstrual problems/PCOS",
    "Perimenopausal health issues",
    "Nutritional diet advice",
    "Treatment of recurrent miscarriage",
    "Infertility",
    "Gynaecological problems"
];

export default function Doctors() {
    return (
        <section id="doctors" className="relative overflow-hidden">
            <div className="relative max-w-xl mx-auto px-4 lg:max-w-7xl">
                <div className="relative mt-12 mb-12 flex lg:mt-24 lg:flex-row sm:flex-col-reverse justify-between">
                    <div className="basis-3/4 relative">
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                            Who we are
                        </h3>
                        <div className="mt-14 mx-auto lg:grid lg:grid-cols-2 lg:gap-x-8">
                            <div>
                                <p className="mt-2 text-xl font-extrabold">About Dr. Anita Balakrishna</p>
                                <p className="mt-6 text-md font-medium text-gray-500 leading-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta justo sed ipsum laoreet, at interdum ante imperdiet. Nam at volutpat arcu, nec placerat purus. Sed cursus leo sit amet turpis tempus euismod. Proin porta lorem vel lectus maximus, sit amet facilisis odio rutrum. Phasellus at eros augue. Curabitur vitae justo in augue pulvinar mollis. Praesent est turpis.
                                </p>
                                <div className="mt-4">
                                    <button className="rounded-full border px-8 py-4 text-primary1 font-extrabold border-primary1">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className="mt-2 text-xl font-extrabold">Services we Offer</p>
                                <dl className="mt-6 grid sm:grid-cols-1">
                                    {features.map((feature, index) => (
                                        <div key={`feature-${index + 1}`} className={`relative${ !!index ? " mt-5" : ""}`}>
                                            <dt>
                                                <MdCheckCircle className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                            </dt>
                                            <dd className="ml-9 text-base font-medium text-gray-500">{feature}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4 mb-10 relative lg:mb-0" aria-hidden="true">
                        <img
                            className="relative mx-auto"
                            src="/assets/images/doctors-section-doctor.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
