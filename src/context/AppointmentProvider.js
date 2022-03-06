import Cookies from "js-cookie";
import DocApi from "../utils/api";
import { sub, add } from "date-fns";
import { formatDateForAPI } from "../utils/commonUtils";
import { createContext, useContext, useReducer } from "react";
import { appointmentSteps, appointmentLocations, DOC_ID } from "../constants";
const { ONLINE } = appointmentLocations;
const initState = {
    appointmentStep: appointmentSteps.SERVICE_SELECTION,
    data: {},
    services: []
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
    case "SET_SERVICES": return {
        ...state,
        services: action.payload
    };
    default: return state;
    }
};
const AppoinmentContext = createContext();
export const useAppointmentContext = () => useContext(AppoinmentContext);
const AppointmentProvider = ({ children }) => {
    const [appointment, dispatch] = useReducer(appointmentReducer, initState);

    const fetchServices = async () => {
        const fetchServicesPayload = {
            resource: "serviceapi",
            body: JSON.stringify({
                taskName: "GET_ALL_SERVICES",
                accesstoken: Cookies.get("accessToken")
            })
        };
        try {
            const servicesResponse = await DocApi({
                method: "POST",
                url: "/doctor",
                headers: {
                    Authorization: Cookies.get("idToken")
                },
                data: fetchServicesPayload
            });
            const { data = {} } = servicesResponse;
            if (data && data.statusCode === 200) {
                const servicesResponseBody = JSON.parse(data.body);
                if (Array.isArray(servicesResponseBody)) {
                    dispatch({
                        type: "SET_SERVICES",
                        payload: servicesResponseBody
                    });
                    return servicesResponseBody;
                }
            }
            return false;
        } catch (err) {
            return false;
        }
    };

    const contextValue = {
        appointment,
        resetData: () => dispatch({ type: "RESET_DATA" }),
        setData: payload => dispatch({ type: "SET_DATA", payload }),
        proceedTo: payload => dispatch({ type: "PROCEED_TO", payload }),
        fetchAppointments: async () => {
            const endDate = formatDateForAPI(add(new Date(), { days: 30 }));
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
                    return Array.isArray(appointmentsResponseBody) ? appointmentsResponseBody : [];
                }
                return false;
            } catch (err) {
                return false;
            }
        },
        addAppointment: async () => {
            const appointmentData = appointment.data;
            const { date, slot, location, type } = appointmentData;
            const { hours, minutes } = slot;
            try {
                const services = await fetchServices();
                if (services && services.length) {
                    const service =  services.find(service => service.serviceName === type);
                    const dateObj = new Date(date).setHours(0, 0, 0, 0);
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
                        taskName: "CREATE_APPOINTMENT",
                        accesstoken: Cookies.get("accessToken"),
                        date: appointmentDate,
                        startTime,
                        endTime,
                        docId: DOC_ID,
                        serviceId: service.id,
                        isOnline: String(location === ONLINE)
                    };
                    const appointmentDataPayload = {
                        resource: "appointmentapi",
                        body: JSON.stringify(createAppointmentPayload)
                    };
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
                } else {
                    return false;
                }
            } catch (err) {
                return false;
            }
        },
        fetchServices
    };
    return (
        <AppoinmentContext.Provider value={contextValue}>
            {children}
        </AppoinmentContext.Provider>
    );
};

export default AppointmentProvider;
