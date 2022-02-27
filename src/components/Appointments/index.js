import { useEffect, useState } from "react";
import classNames from "classnames";
import Pagination from "../Pagination";
import { PAGE_LIMIT } from "../../constants";
import { IoMdCalendar } from "react-icons/io";
import { format, isFuture } from "date-fns";
import { HiOutlineCurrencyRupee, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";
import AppointmentProvider, { useAppointmentContext } from "../../context/AppointmentProvider";

const AppointmentsList = () => {
    const { fetchAppointments } = useAppointmentContext();
    const [currentPage, setCurrentPage] = useState(0);
    const [appointments, setAppointments] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [loader, setLoader] = useState(false);
    const handlePagination = (page) => {
        setCurrentPage(page);
    };
    const handleFetchAppointments = async () => {
        setFetchError(false);
        setLoader(true);
        const appointmentsResponse = await fetchAppointments();
        setLoader(false);
        if (appointmentsResponse) {
            const decoratedAppointments = appointmentsResponse.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(appointment => {
                // const decoratedAppointment = {
                //     name: "Pregnancy Consultation",
                //     time: "5.00PM - 5.10PM",
                //     date: "22/10/21",
                //     location: "Online",
                //     price: "Rs 500",
                //     status: "Upcoming",
                //     img: "/assets/images/pregnancy-consultation.jpg"
                // }
                const decoratedAppointment = {
                    name: "Pregnancy Consultation",
                    location: "In Person",
                    price: "Rs 500",
                    img: "/assets/images/pregnancy-consultation.jpg"
                };
                const appointmentDate = format(new Date(appointment.date), "dd/MM/yyyy");
                const startTime = format(new Date(appointment.startTime), "hh:mm aa");
                const endTime = format(new Date(appointment.endTime), "hh:mm aa");
                decoratedAppointment.date = appointmentDate;
                if (appointment.cancelled) {
                    decoratedAppointment.status = "Cancelled";
                } else if (isFuture(new Date(appointment.date))) {
                    decoratedAppointment.status = "Upcoming";
                } else {
                    decoratedAppointment.status = "Completed";
                }
                decoratedAppointment.time = `${startTime} - ${endTime}`;
                return decoratedAppointment;
            });
            setAppointments(decoratedAppointments);
        } else {
            setFetchError(true);
        }
    };
    useEffect(() => {
        handleFetchAppointments();
    }, []);
    return (
        <>
            {
                !!appointments.length && (
                    <>
                        {appointments.slice(PAGE_LIMIT * currentPage, (currentPage * PAGE_LIMIT) + PAGE_LIMIT).map((service, index) => (
                            <div
                                className="flex border rounded-md items-start sm:items-center shadow-cardshadow1 mt-4 p-1 md:p-2 hover:border-primary1"
                                key={service.name + index}
                            >
                                <div className="m-1 sm:m-2 md:m-4 items-start">
                                    <img src={service.img} className="w-10 h-10 sm:h-12 sm: w-12 md:h-16 md:w-16 rounded-full" />
                                </div>
                                <div className="mx-2 flex flex-col md:flex-row grow">
                                    <div className="flex flex-col grow">
                                        <div className="flex flex-wrap items-center">
                                            <div className="text-md font-semibold text-text2 mr-2 my-1">
                                                {service.name}
                                            </div>
                                            <div className={
                                                classNames(
                                                    "text-xs font-semibold rounded-md px-2 my-1 uppercase",
                                                    service.status === "Upcoming" && "text-blue-800 bg-blue-200",
                                                    service.status === "Cancelled" && "text-red-600 bg-red-100",
                                                    service.status === "Completed" && "text-green-800 bg-green-100"
                                                )
                                            }>
                                                {service.status}
                                            </div>
                                        </div>
                                        <div className="py-1 text-sm font-medium  text-text2">Dr Anita Balakrishna</div>
                                        <div className="flex mt-2 flex-wrap">
                                            <div className="basis-full sm:basis-1/2 md:basis-1/4 py-1 flex items-center text-sm">
                                                <IoMdCalendar className="text-background6 h-4 w-4" />
                                                <div className="ml-1 text-text1 font-medium">{service.date}</div>
                                            </div>
                                            <div className="basis-full sm:basis-1/2 md:basis-1/4 py-1 flex items-center text-sm">
                                                <HiOutlineClock className="text-background6 h-4 w-4" />
                                                <div className="ml-1 text-text1 font-medium">{service.time}</div>
                                            </div>
                                            <div className="basis-full sm:basis-1/2 md:basis-1/4 py-1 flex items-center text-sm">
                                                <HiOutlineLocationMarker className="text-background6 h-4 w-4" />
                                                <div className="ml-1 text-text1 font-medium">{service.location}</div>
                                            </div>
                                            <div className="basis-full sm:basis-1/2 md:basis-1/4 py-1 flex items-center text-sm">
                                                <HiOutlineCurrencyRupee className="text-background6 h-4 w-4" />
                                                <div className="ml-1 text-text1 font-medium">{service.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shrink min-w-[60px]">
                                        {
                                            service.status === "Upcoming" && (
                                                <button className="text-red-600 cursor-pointer">
                                                    Cancel
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Pagination
                            itemsCount={appointments.length}
                            currentPage={currentPage}
                            onChange={handlePagination}
                            pageLimit={PAGE_LIMIT}
                        />
                    </>
                )
            }
            {
                !appointments.length && (
                    <div className="flex items-center justify-center items-center w-full h-40">
                        {
                            loader
                                ? <div className="w-20 h-20 border-l-4 border-primary1 rounded-full animate-spin" />
                                : fetchError ? <div> Failed to load appoinments </div> : <div> No appoinments! </div>
                        }
                    </div>
                )
            }
        </>
    );
};


function Appointments() {
    return (
        <AppointmentProvider>
            <div className="relative max-w-4xl mx-auto my-4">
                <h1 className="text-2xl font-bold text-text2">Your Appointments</h1>
                <h3 className="text-lg leading-6 font-medium text-text2 py-4 max-w-max">
                    View your appointment history and make changes.
                </h3>
                <AppointmentsList />
            </div>
        </AppointmentProvider>
    );
}

export default Appointments;