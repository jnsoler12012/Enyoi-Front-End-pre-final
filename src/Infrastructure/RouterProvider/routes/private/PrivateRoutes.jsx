import React, { useContext } from 'react'
import PrivateRouter from './PrivateRouter'
import { Dashboard, SettingsUser } from '../../../../UI/Pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../../../../UI/Components/Sidebar'
import { MainContext } from '../../..'
import { UserNavbar } from '../../../../UI/Components/Navbars'

export default () => {
    const [mainContext, setMainContext] = useContext(MainContext)

    const { user } = mainContext
    console.log(mainContext)

    return (
        <>
            <Sidebar user={user} />
            <div className="relative md:ml-64 bg-blueGray-100">
                <UserNavbar />
                <>
                    <div className="relative bg-[#60a5fa] md:pt-32 pb-32 pt-12" />
                </>
                <div className="relative top-[-8rem] px-4 md:px-10 mx-auto w-full">
                    <Routes>
                        <Route element={<PrivateRouter />}>
                            <Route path="/*" element={<Navigate to="/app/dashboard" />} />
                            <Route index path="/" element={<Navigate to="/app/dashboard" />}></Route>
                            <Route path='/dashboard' element={<SettingsUser />} />
                        </Route>
                    </Routes>
                </div>

            </div>

        </>


    )
}