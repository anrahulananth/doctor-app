import classNames from "classnames";
import { HiOutlineCurrencyRupee, HiOutlineClock, HiOutlineChevronRight } from "react-icons/hi";
const services = [
    {
        name: "Pregnancy Consultation",
        time: "10 min",
        price: "Rs 500",
        img: "/assets/images/pregnancy-consultation.jpg"
    },
    {
        name: "Fertility Consultation",
        time: "10 min",
        price: "Rs 500",
        img: "/assets/images/fertility-consultation.jpg"
    },
    {
        name: "Gynaec Consultation",
        time: "10 min",
        price: "Rs 500",
        img: "/assets/images/common-consultation.jpg"
    }
];

const SelectService = ({ handleServiceSelection, appointmentData }) => {
    const { name } = appointmentData;
    return (
        <div className="flex flex-row space-x-8 my-8">
            <div className="basis-2/5 bg-white border shadow-cardshadow1 border-background4 rounded-md p-6">
                <div className="flex flex-row">
                    <img src="/assets/images/doctor-anita-large.jpg" className="h-20 w-20 rounded-full" />
                    <div className="ml-8">
                        <div className="text-lg text-text2 font-bold">Dr Anita Balakrishna</div>
                        <div className="mt-2 font-semibold text-text2">MS(OBG)Fetal Maternal Specialist
                    Obstetrics and Gynaecology
                    Senior Consultant Obstetrician & Gynaecologist, Feto-Maternal Specialist
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-text1">
                    {"Dr Anita Balakrishna graduated as a doctor from the prestigious Bangalore Medical College & Hospital. She pursued her Masters in Obstetrics & Gynecology from the esteemed St John's Medical College & Hospital, Bangalore, where she was awarded 10th Rank for MS OBG in 2004 under Rajiv Gandhi University. Later she enrolled for a Fellowship in Fetal-Maternal medicine at Bangalore Assisted Conception Centre, where she was educated on the modern medical practices used in managing High Risk Pregnancies."}
                </div>
            </div>
            <div className="basis-3/5">
                <div className="text-lg font-bold">Select a Service</div>
                {
                    services.map((service) => (
                        <div
                            className={classNames(
                                "flex justify-between border rounded-md items-center cursor-pointer shadow-cardshadow1 mt-8 p-4 hover:border-primary1",
                                service.name === name ? "bg-background10": ""
                            )}
                            key={service.name}
                            onClick={() => handleServiceSelection({
                                name: service.name,
                                price: service.price
                            })}
                        >
                            <div className="mx-4">
                                <img src={service.img} className="h-16 w-16 rounded-full" />
                            </div>
                            <div className="mx-4 flex flex-col grow">
                                <div className="text-lg text-text2 font-semibold">{service.name}</div>
                                <div className="flex mt-2">
                                    <div className="flex items-center text-sm text-text2">
                                        <HiOutlineClock className="text-background6" />
                                        <div className="ml-1">{service.time}</div>
                                    </div>
                                    <div className="ml-8 flex items-center text-sm text-text2">
                                        <HiOutlineCurrencyRupee className="text-background6" />
                                        <div className="ml-1">{service.price}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <HiOutlineChevronRight className="text-background6" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SelectService;
