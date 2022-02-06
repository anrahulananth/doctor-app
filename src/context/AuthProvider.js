import { createContext, useContext, useReducer } from "react";

const authReducer = (state = initState, action) => {
    switch (action.type) {
    case "LOGIN":
    case "LOGOUT":
    case "REGISTER": return {
        ...state,
        data: action.payload,
    };
    case "FETCH_APPOINTMENT": return {
        ...state,
        appointment: action.payload
    };
    case "ADD_APPOINTMENTS": return {
        ...state,
        appointments: [...state.appointments, action.payload]
    };
    case "CANCEL_APPOINTMENT": return {
        ...state,
        appointments: [...state.appointments].filter(
            (appointment) => appointment.id === action.payload
        )
    };
    default: return state;
    }
};
const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
    const initState = {
        data: {
            isLoggedIn: false
        },
        appointments: []
    };
    const [user, dispatch] = useReducer(authReducer, initState);

    const contextValue = {
        user,
        doLogin: payload => dispatch({
            type: "LOGIN", payload: {
                isLoggedIn: true,
                ...payload,
                // TODO Remove
                firstName: "Jane",
                lastName: "Doe",
                phone: "+91 - 923432923",
            }
        }),
        doLogout: () => dispatch({
            type: "LOGOUT",
            payload: {
                isLoggedIn: false
            }
        }),
        doRegister: payload => dispatch({
            type: "REGISTER",
            payload: {
                isLoggedIn: true,
                ...payload
            }
        })
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
