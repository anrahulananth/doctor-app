import Cookies from "js-cookie";
import DocApi from "../utils/api";
import { sub, add } from "date-fns";
import { appointmentSteps, DOC_ID } from "../constants";
import { createContext, useContext, useReducer } from "react";
import { formatDateForAPI } from "../utils/commonUtils";
const initState = {
    appointmentStep: appointmentSteps.SERVICE_SELECTION,
    data: {}
};
const appointmentReducer = (state = initState, action) => {
    switch (action.type) {
    case "PROCEED_TO": return {
        ...state,
        appointmentStep: appointmentSteps[action.payload],
    };
    case "RESET_DATA": return {
        ...state,
        data: {}
    };
    case "SET_DATA": return {
        ...state,
        data: {
            ...state.data,
            ...action.payload
        }
    };
    default: return state;
    }
};
const AppoinmentContext = createContext();
export const useAppointmentContext = () => useContext(AppoinmentContext);
const AppointmentProvider = ({ children }) => {
    const [appointment, dispatch] = useReducer(appointmentReducer, initState);

    const contextValue = {
        appointment,
        resetData: () => dispatch({ type: "RESET_DATA" }),
        setData: payload => dispatch({ type: "SET_DATA", payload }),
        proceedTo: payload => dispatch({ type: "PROCEED_TO", payload }),
        fetchAppointments: async () => {
            const endDate = formatDateForAPI(add(new Date(), {days: 30}));
            const startDate = formatDateForAPI(sub(new Date(), { days: 30 }));
            const getAppoinmentsPayload = {
                taskName: "UPCOMING_APPOINTMENTS",
                accesstoken: Cookies.get("accessToken"),
                startDate,
                endDate,
                docId: DOC_ID
            };
            const appointmentsPayload = {
                resource: "appointmentapi",
                body: JSON.stringify(getAppoinmentsPayload)
            };
            try {
                const appointmentsResponse = await DocApi({
                    method: "POST",
                    url: "/doctor",
                    headers: {
                        "Authorization": Cookies.get("idToken")
                    },
                    data: appointmentsPayload
                });
                const { data = {} } = appointmentsResponse;
                if (data && data.statusCode === 200) {
                    const appointmentsResponseBody = JSON.parse(data.body);
                    return appointmentsResponseBody ? appointmentsResponseBody : [];
                }
                return false;
            } catch (err) {
                return false;
            }
        },
        addAppointment: async () => {
            const appointmentData = appointment.data;
            const { date, slot } = appointmentData;
            const { hours, minutes } = slot;
            const dateObj = new Date(date).setHours(0,0,0,0);
            const appointmentDate = formatDateForAPI(dateObj);
            const startTime = formatDateForAPI(add(dateObj, {
                hours,
                minutes
            }));
            const endDateValues = (hr, min) => {
                let hourValue = hr;
                let minValue = min;
                let dayValue = 0;
                if (min === 30) {
                    if (hr === 23) {
                        hourValue = 0;
                        dayValue = 1;
                    } else {
                        hourValue = hr + 1;
                    }
                } else {
                    minValue = 30;
                }
                return {
                    days: dayValue,
                    hours: hourValue,
                    minutes: minValue
                };
            };
            const endTime = formatDateForAPI(add(dateObj, endDateValues(hours, minutes)));
            const createAppointmentPayload = {
                taskName:"CREATE_APPOINTMENT",
                accesstoken: Cookies.get("accessToken"),
                date: appointmentDate,
                startTime,
                endTime,
                docId: DOC_ID
            };
            const appointmentDataPayload = {
                resource: "appointmentapi",
                body: JSON.stringify(createAppointmentPayload)
            };
            try {
                const createAppointmentResponse = await DocApi({
                    method: "POST",
                    url: "/doctor",
                    headers: {
                        "Authorization": Cookies.get("idToken")
                    },
                    data: appointmentDataPayload
                });
                const { data = {} } = createAppointmentResponse;
                return data && data.statusCode === 200;
            } catch (err) {
                return false;
            }
        }
    };
    return (
        <AppoinmentContext.Provider value={contextValue}>
            {children}
        </AppoinmentContext.Provider>
    );
};

export default AppointmentProvider;
