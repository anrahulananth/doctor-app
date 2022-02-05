import { createContext, useContext, useReducer } from "react";
import { appointmentSteps } from "../constants";

const appointmentReducer = (state = initState, action) => {
    switch (action.type) {
    case "PROCEED_TO": return {
        ...state,
        appointmentStep: appointmentSteps[action.payload],
    };
    default: return state;
    }
};
const AppoinmentContext = createContext();
export const useAppointmentContext = () => useContext(AppoinmentContext);
const AppointmentProvider = ({ children }) => {
    const initState = {
        appointmentStep: appointmentSteps.SERVICE_SELECTION
    };
    const [appointment, dispatch] = useReducer(appointmentReducer, initState);

    const contextValue = {
        appointment,
        proceedTo: payload => dispatch({ type: "PROCEED_TO", payload })
    };
    return (
        <AppoinmentContext.Provider value={contextValue}>
            {children}
        </AppoinmentContext.Provider>
    );
};

export default AppointmentProvider;
