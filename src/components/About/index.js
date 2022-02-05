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
    "Gynaecological problems (fibroid uterus.endometriosis,uterine anomalies)"
];

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden">
            <div className="relative max-w-xl mx-auto px-4 lg:max-w-7xl">
                <div className="relative mt-12 mb-12 flex lg:mt-24 lg:flex-row sm:flex-col-reverse justify-between text-text2">
                    <div className="basis-3/4 relative">
                        <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                            Who we are
                        </h3>
                        <div className="mt-14 mx-auto lg:grid lg:grid-cols-2 lg:gap-x-8">
                            <div>
                                <p className="mt-2 text-xl font-extrabold">About Dr. Anita Balakrishna</p>

                                <p className="mt-6 text-md font-medium text-gray-500 leading-8">
                                    Dr Anita Balakrishna graduated as a doctor from the prestigious Bangalore Medical College & Hospital.She pursued her Masters in Obstetrics & Gynecology from the esteemed St John&apos;s Medical College & Hospital, Bangalore, where she was awarded 10th Rank for MS OBG in 2004 under Rajiv Gandhi University. Later she enrolled for a Fellowship in Fetal-Maternal medicine at Bangalore Assisted Conception Centre, where she was educated on the modern medical practices used in managing High Risk Pregnancies.
                                </p>
                            </div>
                            <div>
                                <p className="mt-2 text-xl font-extrabold">Services we offer</p>
                                <dl className="mt-6 grid sm:grid-cols-1">
                                    {features.map((feature, index) => (
                                        <div key={`feature-${index + 1}`} className={`relative${!!index ? " mt-5" : ""}`}>
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
