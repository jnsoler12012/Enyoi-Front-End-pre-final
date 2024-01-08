import { Navigate, Outlet } from 'react-router-dom'
import { MainContext } from '../../../App'
import React, { useContext } from 'react'

export default () => {
    
    const [main] = useContext(MainContext)
    const { user } = main
    
    console.log("Private routererassadsad", main)
    return (
        user.token === null ? <Outlet /> : <Navigate to='/public/login' />
    )
}