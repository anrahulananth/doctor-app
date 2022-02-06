import { FaCircle, FaCheckCircle } from "react-icons/fa";
import Confirmation from "./Confirmation";
import SelectService from "./SelectService";
import SelectSlot from "./SelectSlot";
import UserInformation from "./UserInformation";
import classNames from "classnames";
import { useAppointmentContext } from "../../context/AppointmentProvider";
import { useAuthContext } from "../../context/AuthProvider";
import {
    appointmentSteps,
    appointmentStepsArray,
    SERVICE_SELECTION,
    SLOT_SELECTION,
    APPOINTMENT_CONFIRMATION,
    USER_INFORMATION
} from "../../constants";

export default function Appointment() {
    const { appointment, setData, resetData, proceedTo } = useAppointmentContext();
    const { user, addAppointment } = useAuthContext();
    const {
        appointmentStep,
        data
    } = appointment;
    const handleSetData = (data) => {
        setData(data);
    };

    return (
        <section id="book-appointment" className="relative overflow-hidden">
            <div className="relative pb-20 px-4 sm:px-6 sm:pt-8 md-pt-16 lg:pt-24 lg:pb-25 lg:px-8">
                <div className="relative max-w-7xl mx-auto">
                    <h2 className="text-3xl tracking-tight font-extrabold text-text3 sm:text-4xl">
                        Book an Appointment with Dr Anita
                    </h2>
                    <div className="hidden md:flex justify-evenly flex-row">
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
                    <div className="flex md:hidden my-4">
                        <div className="font-bold text-xl text-text3">
                            Step {appointmentSteps[appointmentStep.type].id}. {appointmentSteps[appointmentStep.type].name}
                        </div>
                    </div>
                    {{
                        [SERVICE_SELECTION]:
                            <SelectService
                                handleServiceSelection={handleSetData}
                                appointmentStep={appointmentStep}
                                appointmentData={data}
                                proceedTo={proceedTo}
                            />,
                        [SLOT_SELECTION]:
                            <SelectSlot
                                appointmentStep={appointmentStep}
                                handleSlotData={handleSetData}
                                appointmentData={data}
                                proceedTo={proceedTo}
                            />,
                        [USER_INFORMATION]:
                            <UserInformation
                                appointmentStep={appointmentStep}
                                appointmentData={data}
                                proceedTo={proceedTo}
                                user={user}
                            />,
                        [APPOINTMENT_CONFIRMATION]:
                            <Confirmation
                                addAppointment={addAppointment}
                                appointmentData={data}
                                resetData={resetData}
                            />
                    }[appointmentStep.type]}
                </div>
            </div>
        </section>
    );
}
