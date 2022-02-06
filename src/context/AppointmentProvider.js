import { createContext, useContext, useReducer } from "react";
import { appointmentSteps } from "../constants";

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
    const initState = {
        appointmentStep: appointmentSteps.SERVICE_SELECTION,
        data: {}
    };
    const [appointment, dispatch] = useReducer(appointmentReducer, initState);

    const contextValue = {
        appointment,
        resetData: () => dispatch({ type: "RESET_DATA"}),
        setData: payload => dispatch({ type: "SET_DATA", payload }),
        proceedTo: payload => dispatch({ type: "PROCEED_TO", payload })
    };
    return (
        <AppoinmentContext.Provider value={contextValue}>
            {children}
        </AppoinmentContext.Provider>
    );
};

export default AppointmentProvider;
