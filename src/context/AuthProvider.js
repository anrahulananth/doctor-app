import { createContext, useContext, useReducer } from "react";

const authReducer = (state = initState, action) => {
    switch (action.type) {
    case "LOGIN": return {
        ...state,
        user: action.payload,
    };
    case "LOGOUT": return {
        ...state,
        user: action.payload,
    };
    case "REGISTER": return {
        ...state,
        user: action.payload,
    };
    default: return state;
    }
};
const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
    const initState = {
        user: null
    };
    const [user, dispatch] = useReducer(authReducer, initState);

    const contextValue = {
        user,
        doLogin: payload => dispatch({ type: "LOGIN", payload }),
        doLogout: payload => dispatch({ type: "LOGOUT", payload }),
        doRegister: payload => dispatch({ type: "REGISTER", payload})
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
