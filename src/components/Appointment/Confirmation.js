import { useEffect } from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { HiOutlineClock, HiOutlineCurrencyRupee } from "react-icons/hi";

const Confirmation = ({ resetData, appointmentData }) => {
    const { type, price, time, slot, location, date } = appointmentData;
    const router = useRouter();
    useEffect(() => {
        return () => {
            resetData();
        };
    }, []);
    return (
        <>
            <div className="flex flex-row space-x-4 my-8 justify-center">
                <div className="basis-1/2 border shadow-cardshadow1 border-background4 rounded-md">
                    <div className="p-6 bg-background3 rounded-md flex flex-col items-center">
                        {
                            appointmentData.type ? (
                                <>
                                    <img src="/assets/images/confirm-booking.png" className="h-15 w-15" />
                                    <div className="mt-4 text-lg text-text2 font-bold">Appointment with Dr Anita Balakrishna Confirmed!</div>
                                    <div className="mt-2 text-text2">Please check your email for your appointment details</div>
                                </>
                            ) : (
                                <>
                                    <div className="mt-4 text-lg text-text2 font-bold">Appointment Booking Failed!</div>
                                </>
                            )
                        }
                    </div>
                    {
                        appointmentData.type && (
                            <>
                                <div className="border-t border-background4" />
                                <div className="p-6 bg-white rounded-md">
                                    <div className="mt-4">
                                        <div className="text-lg text-text2 font-semibold">
                                            {type}
                                        </div>
                                        <div className="flex mt-2">
                                            <div className="flex items-center text-sm text-text2">
                                                <HiOutlineClock className="text-background6" />
                                                <div className="ml-1">{time}</div>
                                            </div>
                                            <div className="ml-8 flex items-center text-sm text-text2">
                                                <HiOutlineCurrencyRupee className="text-background6" />
                                                <div className="ml-1">{price}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-lg text-text2 font-semibold">
                                        Address
                                        </div>
                                        <div className="text-base text-text2 font-medium mt-2">
                                            {location}
                                        </div>
                                        {location === "In Person" && (
                                            <div className="text-base text-text2">
                                            Gynecology/Obstetrics Clinic<br />
                                            #B-001, 10/1, Ground floor, Victoria lawns,<br />
                                            Victoria Road, Victoria Layout, Bangalore
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-lg text-text2 font-semibold">
                                        Date
                                        </div>
                                        <div className="text-base text-text2 font-medium mt-2">
                                            {format(new Date(date), "io MMMM yyyy")}{`, ${slot}`}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-2 my-8">
                <div />
                <button
                    onClick={() => router.replace("/")}
                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-end bg-primary1 text-white shadow-buttonshadow hover:bg-background2"
                >
                    Back to Home
                </button>
            </div>
        </>
    );
};

export default Confirmation;
