import React, { createContext, useContext, useEffect, useState } from 'react'
import '../UI/Styles/app.css'
import { AxiosContext, AxiosContextProvider } from './AxiosProvider'
import { RouterProvider } from './RouterProvider'

export const MainContext = createContext(null)

export const MainApp = () => {
  console.log("ENTRAMOS", window.localStorage.getItem("TOKEN")
  )
  // window.localStorage.removeItem("TOKEN")
  // window.localStorage.removeItem("user")

  const [main, setMain] = useState({
    loading: false,
    user: {
      token: window.localStorage.getItem("TOKEN") && window.localStorage.getItem("TOKEN"),
      info: window.localStorage.getItem("user") && window.localStorage.getItem("user").split(',').slice(0, -1).reduce((acc, curr) => (typeof acc === 'string' ? ({
        [acc.split('=')[0]]: acc.split('=')[1]
      }) : ({
        ...acc, [curr.split('=')[0]]: curr.split('=')[1]
      })), {})
    },
    data: {},
    services: null,
    notification: {}
  })

  useEffect(() => {
    console.log("_____________MAIN A CAMBIADO", main, window.localStorage.getItem("TOKEN"))

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