
import { createContext, ReactNode, useContext, useReducer } from "react";



export type notification ={
    message: string,
    toastStatus: "success" | "error" | "warning" | "info" | '',
    isOpen: boolean
}

export type ACTIONS = 
    | {type: "OPEN" ; payload: typeof initialState} |
    {type: "CLOSE" }

const initialState:notification ={
    message: "",
    toastStatus: "",
    isOpen: false
}

// const NotificationContext = createContext({})
export const NotificationContext = createContext({});


const notificationReducer=(state, action:ACTIONS)=>{
    switch (action.type) {
        case 'OPEN':
            return {
                ...state,
                ...action.payload
            }
        case 'CLOSE':
            return {
                ...state,
                isOpen: false,
                message: "",
                toastStatus: ""
            }
    
        default:
            state
    }
}


export const NotificationProvider=({children}:{children: ReactNode})=>{
    const [state, dispatch] = useReducer(notificationReducer,initialState)
    return (
        <NotificationContext.Provider value={{state, dispatch}}>
            {children}
        </NotificationContext.Provider>
    )
}



