import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiX } from "react-icons/hi";

export default function Doctors() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <div>
            <div className='grid place-items-center'>
                <h1 className='text-5xl font-semibold py-2 text-white'>Doctors</h1>
                <div className="bg-secondary w-36 h-1 rounded-full"></div>
            </div>

            <div className='flex flex-wrap flex-col-3 justify-around w-full px-16 py-8 gap-4'>

                <div className=" bg-gray-200 w-80 h-[32rem] rounded-xl p-6 space-y-4">
                    <div>
                        <Image className="w-full h-64 rounded-md transition hover:bg-cyan-300" src="/assets/doctor1.png" height="300" width="300" alt="" />
                    </div>
                    <div id="description" className="space-y-4">
                        <h2 className="font-semibold text-xl">
                            Dr. Adams
                        </h2>
                        <p className="text-slate-500 text-sm select-none">  </p>
                        <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                            <span id="price" className="flex justify-between items-center space-x-2 text-lg">
                                <Image src="/assets/solana-colored.svg" width="20" height="20" alt="Solana" className='mr-2' />
                                0.041 SOL
                            </span>
                            <span className="text-slate-500 flex justify-between items-center select-none text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Mon-Fri
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl' onClick={() => setShowNavbar(true)}>Book Appointment</button>
                            {showNavbar ? (
                                <div>
                                    <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                                        <div className="relative my-6 mx-auto w-screen">
                                            <div className="ml-[25rem] border-0   shadow-lg relative flex flex-col w-128 bg-gray-800 outline-none focus:outline-none ">
                                                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                    <div>
                                                        <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                                                            Book Appointment
                                                        </div>
                                                    </div>

                                                    <button
                                                        className="absolute right-6"
                                                        onClick={() => setShowNavbar(false)}
                                                        aria-hidden="false"
                                                        aria-label="button"
                                                    >
                                                        <HiX
                                                            className="h-7 w-7 text-white"
                                                            aria-hidden="false"
                                                        />
                                                    </button>
                                                </div>

                                                <div className="grid justify-center">
                                                    <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                                </div>

                                                <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4">
                                                    <div className="py-2">
                                                        <input
                                                            className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                                                            placeholder="Senders address"
                                                            value="0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE"
                                                        />
                                                    </div>

                                                    <div className="py-2">
                                                        <input
                                                            className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                                                            placeholder="SOL"
                                                            value="0.041"
                                                        />
                                                    </div>

                                                    <Link href="/chatroom">
                                                        <button className="bg-blue-600 text-white py-2 px-8 rounded-md ml-2">
                                                            Do transaction
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-200 w-80 h-[32rem] rounded-xl p-6 space-y-4">
                    <div>
                        <Image className="w-full h-64 rounded-md transition hover:bg-cyan-300" src="/assets/doctor2.png" height="300" width="300" alt="" />
                    </div>
                    <div id="description" className="space-y-4">
                        <h2 className="font-semibold text-xl">
                            Dr. Geeta
                        </h2>
                        <p className="text-slate-500 text-sm select-none">  </p>
                        <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                            <span id="price" className="flex justify-between items-center space-x-2 text-lg">
                                <Image src="/assets/solana-colored.svg" width="20" height="20" alt="Solana" className='mr-2' />
                                0.041 SOL
                            </span>
                            <span className="text-slate-500 flex justify-between items-center select-none text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Mon-Thu
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl' onClick={() => setShowNavbar(true)}>Book Appointment</button>
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-200 w-80 h-[32rem] rounded-xl p-6 space-y-4">
                    <div>
                        <Image className="w-full h-64 rounded-md transition hover:bg-cyan-300" src="/assets/doctor1.png" height="300" width="300" alt="" />
                    </div>
                    <div id="description" className="space-y-4">
                        <h2 className="font-semibold text-xl">
                            Dr. Jain
                        </h2>
                        <p className="text-slate-500 text-sm select-none">  </p>
                        <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                            <span id="price" className="flex justify-between items-center space-x-2 text-lg">
                                <Image src="/assets/solana-colored.svg" width="20" height="20" alt="Solana" className='mr-2' />
                                0.002 SOL
                            </span>
                            <span className="text-slate-500 flex justify-between items-center select-none text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Mon-Fri
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl' onClick={() => setShowNavbar(true)}>Book Appointment</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
