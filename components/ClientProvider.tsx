'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'

function ClientProvider() {
  return (
    <>
    <Toaster 
    position='top-right' 
    toastOptions={{
      duration: 500
    }} />
    </>
  )
}

export default ClientProvider