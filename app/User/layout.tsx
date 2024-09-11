"use client"
import React, { ReactNode } from 'react'
import { NotificationProvider } from '../_Context/Notifications/NotificationContext'
import SnackBar from '../Components/snackBar'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <NotificationProvider>
            <SnackBar />
            {children}
        </NotificationProvider>
    </div>
  )
}

export default layout