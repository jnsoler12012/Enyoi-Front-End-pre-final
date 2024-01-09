import React from 'react'
import { CardProfile, CardUserInfo } from '../Components/Cards'

export default function () {
    return (
        <>
            <div className="flex flex-wrap lg:flex-row flex-col-reverse">
                <div className="w-full lg:w-8/12 px-4">
                    <CardUserInfo />
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <CardProfile />
                </div>
            </div>
        </>
    )
}