import DocApi from "../utils/api";
import { useRouter } from "next/router";
import { createContext, useContext, useReducer } from "react";
import { filterObject, safeJsonParse, setCookie } from "../utils/commonUtils";

const initState = {
    user: {
        isLoggedIn: false
    },
    error: {},
    appointments: [],
    isLoading: false
};

const appStateReducer = (state = initState, action) => {
    switch (action.type) {
    // User
    case "LOGIN":
    case "LOGOUT":
    case "REGISTER": return {
        ...state,
        user: {
            ...state.user,
            ...action.payload
        }
    };
    case "LOGIN_ERROR":
    case "REGISTER_ERROR": return {
        ...state,
        error: action.type
    };
    case "RESET_USER": return {
        ...state,
        user: initState.user
    };
    case "RESET_ERROR": return {
        ...state,
        error: ""
    };
    // Appointments
    case "FETCH_APPOINTMENTS": return {
        ...state,
        appointments: action.payload
    };
    case "ADD_APPOINTMENT": return {
        ...state,
        appointments: [...state.appointments, action.payload]
    };
    case "CANCEL_APPOINTMENT": return {
        ...state,
        appointments: [...state.appointments].filter(
            (appointment) => appointment.id === action.payload
        )
    };
    case "RESET_APPOINTMENTS": return {
        ...state,
        appointments: initState.appointments
    };
    // App State
    case "LOADING": return {
        ...state,
        isLoading: action.payload
    };
    default: return state;
    }
};
const AppStateContext = createContext();
export const useAppStateContext = () => useContext(AppStateContext);
const AppStateProvider = ({ children, appCookies }) => {
    const cookies = filterObject(appCookies, ["userData"]);
    const [err, userData] = safeJsonParse(cookies.userData);
    const authState = Object.assign({}, initState);
    if (!err && userData.isLoggedIn) {
        authState.user = userData;
    }
    const router = useRouter();
    const [appState, dispatch] = useReducer(appStateReducer, authState);

    const setLoader = payload => dispatch({
        type: "LOADING",
        payload
    });

    const contextValue = {
        appState,
        doLogin: async (payload, isLoginPage) => {
            const filteredPayload = filterObject(payload, [
                "email",
                "password"
            ]);
            let loginBody = {
                taskName: "login",
                email: "fonavo9635@icesilo.com",
                password: "Password123!"
                //...filteredPayload
            };
            setLoader(true);
            try {
                const loginResponse = await DocApi({
                    method: "POST",
                    url: "/auth",
                    data: {
                        "resource": "authenticationapi",
                        "body": JSON.stringify(loginBody)
                    }
                });
                const { data = {} } = loginResponse;
                if (data && data.statusCode === 200 && data.body) {
                    const loginResponseBody = JSON.parse(data.body);
                    const {
                        idToken,
                        accessToken,
                        refreshToken
                    } = loginResponseBody;

                    const validateUserBody = {
                        taskName: "validateuser",
                        accesstoken: accessToken,
                        isDoctor: "false"
                    };
                    const validateUserResponse = await DocApi({
                        method: "POST",
                        url: "/auth",
                        headers: {
                            Authorization: idToken
                        },
                        data: {
                            "resource": "authenticationapi",
                            "body": JSON.stringify(validateUserBody)
                        }
                    });
                    const { data: validateData = {} } = validateUserResponse;
                    if (validateData && validateData.statusCode === 200 && validateData.body) {
                        const validateResponseBody = JSON.parse(validateData.body);
                        const dataObj = {
                            isLoggedIn: true,
                            lastName: "Doe",
                            ...validateResponseBody
                        };
                        dispatch({
                            type: "LOGIN",
                            payload: dataObj
                        });
                        setCookie("accessToken", accessToken);
                        setCookie("refreshToken", refreshToken);
                        setCookie("idToken", idToken);
                        setCookie("userData", JSON.stringify(dataObj));
                        isLoginPage && router.push("/");
                    } else {
                        throw new Error("Login");
                    }
                } else {
                    throw new Error("Login");
                }
            } catch (err) {
                dispatch({
                    type: "LOGIN_ERROR"
                });
            } finally {
                setLoader(false);
            }
        },
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
        }),
        addAppointment: payload => dispatch({
            type: "ADD_APPOINTMENT",
            payload
        }),
        setLoader
    };
    return (
        <AppStateContext.Provider value={contextValue}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider;
