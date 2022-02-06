import { createContext, useContext, useReducer } from "react";

const authReducer = (state = initState, action) => {
    switch (action.type) {
    case "LOGIN": return {
        ...state,
        ...action.payload,
    };
    case "LOGOUT": return {
        ...state,
        ...action.payload,
    };
    case "REGISTER": return {
        ...state,
        ...action.payload,
    };
    default: return state;
    }
};
const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
    const initState = {
        isLoggedIn: false
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
        doLogout: payload => dispatch({
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
