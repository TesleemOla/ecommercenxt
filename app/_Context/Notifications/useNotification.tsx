import { useContext } from "react"
import { NotificationContext } from "./NotificationContext"


const useNotification=()=>{
    const context = useContext(NotificationContext)
    if(!context){
        throw new Error("Context can only be used inside its wrapper component")
    }
    return context
}

export default useNotification