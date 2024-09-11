import { ACTIONS, Notification } from "./NotificationContext"




export const Actions = (dispatch: React.Dispatch<ACTIONS>)=>{
    const close = function () {
        dispatch({
            type: "CLOSE"
        })
    }
    const open = function ( message: string, toastStatus:Notification['toastStatus']){
        dispatch({
            type: "OPEN",
            payload: {
            message,
            toastStatus,
            isOpen: true
            }
        })
        setTimeout(close, 5000)
    }


    return {open , close }
}