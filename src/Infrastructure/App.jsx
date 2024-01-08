import React, { createContext, useContext, useEffect, useState } from 'react'
import '../UI/Styles/app.css'
import { AxiosContext, AxiosContextProvider } from './AxiosProvider'
import { RouterProvider } from './RouterProvider'

export const MainContext = createContext(null)

export const MainApp = () => {
  console.log("ENTRAMOS", 
  )
  
  const [main, setMain] = useState({
    loading: false,
    user: {
      token: null,
      info: null
    },
    data: {},
    services: null
  })

  useEffect(() => {
    console.log("_____________MAIN A CAMBIADO", main)

    return () => {
      console.log("_____________RRR MAIN A CAMBIADO", main)
    }
  }, [main])


  return (
    <MainContext.Provider value={[main, setMain]}>
      <AxiosContextProvider config={{ baseURL: "http://localhost:8080/api" }}>
        <RouterProvider config={{ basename: "/v1" }} />
      </ AxiosContextProvider>
    </MainContext.Provider>

  )
}