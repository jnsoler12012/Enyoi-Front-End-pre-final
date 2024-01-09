import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from "Web_React_Icons/fa";
import { userModificationValidation } from '../../utils/validations';
const randomColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

export default function CardTable() {
    const color = "light";
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userModificationValidation())
    });

    const [currentUserEditing, setCurrentUserEditing] = useState(0)



    //console.log(randomColor);

    const onSubmit = async (sendData) => {

    }
    const handleUserEdit = (id) => {
        console.log("MODIFICAMOS");
        setCurrentUserEditing(prevState => {
            if (prevState)
                return 0
            else
                return id
        })
    }


    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Card Tables
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <form id="modify-user-form" onSubmit={handleSubmit(onSubmit)}>
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th
                                        className={
                                            "pl-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    >
                                        Role Id
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    >
                                        Name
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    >
                                        Document
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    >
                                        Email
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    >
                                        Password
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    >
                                        State
                                    </th>
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                        }
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="flex items-center border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap pr-4 h-[3rem]">
                                        <p style={{
                                            background: randomColor,
                                            width: '1rem',
                                            height: '100%'
                                        }} className={`flex`}></p>
                                        <p className='flex ml-[1.3rem]'>
                                            ABC
                                        </p>
                                    </td>

                                    <td className="text-wrap border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs pr-4">
                                        <input type="text" defaultValue={'Charlie Brown'}
                                            className={`${currentUserEditing == 2 && 'px-1 outline outline-1 outline-[#cfcfcf] '} text-[0.75rem] p-[2px] peer block min-h-[auto] rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 w-[7rem] xl:w-[100%]`}
                                            disabled={currentUserEditing == 2 ? false : true}
                                        />
                                        {
                                            //errors?.['test']?.type  {errors?.['test']?.message}
                                            errors?.['test']?.type &&
                                            <p key={'test'} className="text-red-500 text-[0.85rem] italic overflow-wrap text-ellipsis overflow-hidden">
                                                {errors?.['test']?.message}
                                            </p>
                                        }
                                    </td>

                                    <td className="text-wrap border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs pr-4">
                                        <input type="text" defaultValue={'12345678.8'}
                                            className={`${currentUserEditing == 2 && 'px-1 outline outline-1 outline-[#cfcfcf] '} text-[0.75rem] p-[2px] w-[5rem] xl:w-[100%] peer block min-h-[auto] rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}

                                            disabled={currentUserEditing == 2 ? false : true}
                                        />
                                        {
                                            //errors?.['test']?.type  {errors?.['test']?.message}
                                            errors?.['test']?.type &&
                                            <p key={'test'} className="text-red-500 text-[0.85rem] italic overflow-wrap text-ellipsis overflow-hidden">
                                                {errors?.['test']?.message}
                                            </p>
                                        }
                                    </td>
                                    <td className="text-wrap border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs pr-4">
                                        <input type="text" defaultValue={'email@email.com'}
                                            className={`${currentUserEditing == 2 && 'px-1 outline outline-1 outline-[#cfcfcf] '} text-[0.75rem] p-[2px] w-[7rem] xl:w-[100%] peer block min-h-[auto] rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}

                                            disabled={currentUserEditing == 2 ? false : true}
                                        />
                                        {
                                            //errors?.['test']?.type  {errors?.['test']?.message}
                                            errors?.['test']?.type &&
                                            <p key={'test'} className="text-red-500 text-[0.85rem] italic overflow-wrap text-ellipsis overflow-hidden">
                                                {errors?.['test']?.message}
                                            </p>
                                        }
                                    </td>
                                    <td className="text-wrap border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs pr-4">
                                        <input type="text" defaultValue={'*********'}
                                            className={`${currentUserEditing == 2 && 'px-1 outline outline-1 outline-[#cfcfcf] '} text-[0.75rem] p-[2px] w-[6rem] xl:w-[100%] peer block min-h-[auto] rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}

                                            disabled={currentUserEditing == 2 ? false : true}
                                        />
                                        {
                                            //errors?.['test']?.type  {errors?.['test']?.message}
                                            errors?.['test']?.type &&
                                            <p key={'test'} className="text-red-500 text-[0.85rem] italic overflow-wrap text-ellipsis overflow-hidden">
                                                {errors?.['test']?.message}
                                            </p>
                                        }
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">60%</span>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                    <div
                                                        style={{ width: "100%" }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-right" >
                                        <button
                                            className="flex content-center justify-center items-center bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-[8px] py-[7px] rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-3"
                                            type="button"
                                            onClick={() => { handleUserEdit(2) }}
                                        >
                                            <FaUserEdit style={{ width: '1rem', marginRight: '7px' }} />
                                            Settings
                                        </button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </form>

                </div>
            </div >
        </>
    )
}