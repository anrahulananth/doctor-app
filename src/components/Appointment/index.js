import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Auth from "../Auth";
import Confirmation from "./Confirmation";
import SelectService from "./SelectService";
import SelectSlot from "./SelectSlot";
import UserInformation from "./UserInformation";
import classNames from "classnames";
import { useAppointmentContext } from "../../context/AppointmentProvider";
import {
    appointmentSteps,
    appointmentStepsArray,
    SERVICE_SELECTION,
    SLOT_SELECTION,
    APPOINTMENT_CONFIRMATION,
    USER_INFORMATION
} from "../../constants";

export default function Appointment() {
    const { appointment, proceedTo } = useAppointmentContext();
    const {
        appointmentStep
    } = appointment;

    return (
        <section id="book-appointment" className="relative overflow-hidden">
            <div className="relative bg-background3 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-25 lg:px-8">
                <div className="relative max-w-7xl mx-auto">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        Book an Appointment with Dr Anita
                    </h2>
                    <div className="flex justify-evenly flex-row">
                        {
                            appointmentStepsArray.map((aptStep, index) => {
                                const {
                                    id, name
                                } = appointmentSteps[aptStep];
                                return (
                                    <div key={name} className={`basis-1/${appointmentStepsArray.length}`}>
                                        <div className="my-8">
                                            <div className="flex items-center">
                                                {
                                                    id < appointmentStep.id && <FaCheckCircle className="h-6 w-7 text-green-600" />
                                                }
                                                {
                                                    id >= appointmentStep.id && <FaCircle className={
                                                        classNames("h-6 w-7", {
                                                            "text-background4": id > appointmentStep.id,
                                                            "text-primary1 rounded-full border p-0.5 border-primary1": id === appointmentStep.id
                                                        })
                                                    } />
                                                }
                                                <div className={classNames("w-full h-1 mx-4 rounded-md", {
                                                    "bg-transparent": (index + 1) === appointmentStepsArray.length,
                                                    "bg-background5": (index + 1) !== appointmentStepsArray.length
                                                })} />
                                            </div>
                                        </div>
                                        <div className="text-text1">
                                            {name}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {{
                        [SERVICE_SELECTION]:
                            <SelectService />,
                        [SLOT_SELECTION]:
                            <SelectSlot />,
                        [USER_INFORMATION]: <>
                            <Auth />
                            <UserInformation />
                        </>,
                        [APPOINTMENT_CONFIRMATION]:
                            <Confirmation />
                    }[appointmentStep.type]}
                    <div className="grid grid-flow-row grid-cols-2 my-8">
                        {
                            (appointmentStep.type !== SERVICE_SELECTION && appointmentStep.type !== APPOINTMENT_CONFIRMATION) ? (
                                <button
                                    onClick={() => proceedTo(appointmentStepsArray[Number(appointmentStep.id - 2)])}
                                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-start bg-white text-primary1 border border-primary1 shadow-buttonshadow2 hover:bg-background7"
                                >
                                    <HiArrowNarrowLeft />&nbsp;&nbsp;Back
                                </button>
                            ) : (
                                <div />
                            )
                        }
                        {
                            appointmentStep.type !== APPOINTMENT_CONFIRMATION && appointmentStep.type !== USER_INFORMATION && (
                                <button
                                    onClick={() => proceedTo(appointmentStepsArray[appointmentStep.id])}
                                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-end bg-primary1 text-white shadow-buttonshadow hover:bg-background2"
                                >
                                    Next&nbsp;&nbsp;<HiArrowNarrowRight />
                                </button>
                            )
                        }
                        {
                            appointmentStep.type === USER_INFORMATION && (
                                <button
                                    onClick={() => proceedTo(appointmentStepsArray[appointmentStep.id])}
                                    className="rounded-full font-bold py-4 px-20 justify-self-end bg-primary1 text-white shadow-buttonshadow hover:bg-background2"
                                >
                                    Confirm
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
