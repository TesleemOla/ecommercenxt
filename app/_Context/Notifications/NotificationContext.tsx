import { createContext, ReactNode, Dispatch, useReducer } from "react";

// Define the notification type
export type Notification = {
    message: string;
    toastStatus: "success" | "error" | "warning" | "info" | '';
    isOpen: boolean;
};

// Define the actions type
export type ACTIONS =
    | { type: "OPEN"; payload: Notification }
    | { type: "CLOSE" };

// Initial state
const initialState: Notification = {
    message: "",
    toastStatus: "",
    isOpen: false
};

// Define the context type
type NotificationContextType = {
    state: Notification;
    dispatch: Dispatch<ACTIONS>;
};

// Create the context with the correct type
export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Reducer function
const notificationReducer = (state: Notification, action: ACTIONS): Notification => {
    switch (action.type) {
        case 'OPEN':
            return {
                ...state,
                ...action.payload
            };
        case 'CLOSE':
            return {
                ...state,
                isOpen: false,
                message: "",
                toastStatus: ""
            };
        default:
            return state;
    }
};

// NotificationProvider component
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState);
    return (
        <NotificationContext.Provider value={{ state, dispatch }}>
            {children}
        </NotificationContext.Provider>
    );
};
