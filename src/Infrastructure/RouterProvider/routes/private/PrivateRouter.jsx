import { Navigate, Outlet } from 'react-router-dom'
import { MainContext } from '../../../App'
import React, { useContext } from 'react'
import { checkTokenExpires, logOut } from '../../../../Application/utils'

export default () => {

    const [main, setMainContext] = useContext(MainContext)
    const { user } = main

    console.log("Private routererassadsad", main)
    console.log("Private routererassadsad", checkTokenExpires(user.token))
    const statusExpToken = checkTokenExpires(user.token)

    if (statusExpToken != 'No token')
        if (!checkTokenExpires(user.token)) {
            console.log("SALIKMOS PORQUE TOKEN EXPIRO");
            logOut(setMainContext, 'Expire')
        }
    return (
        user.token !== null ? <Outlet /> : <Navigate to='/public/login' />
    )
}