"use client"
import React from 'react'
import useNotification from '../_Context/Notifications/useNotification'
import { Actions } from '../_Context/Notifications/Actions'


const Page = () => {
  const {state, dispatch} = useNotification()
  const action = Actions(dispatch)
  return (<>
    <div>User</div>
    <button onClick={()=> action.open("Open Notification", "success")}>
      Click
    </button>
    </>
  )
}

export default Page