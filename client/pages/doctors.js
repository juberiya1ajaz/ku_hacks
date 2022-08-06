import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Doctors() {
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
                            <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl'>Book Appointment</button>
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
                            <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl'>Book Appointment</button>
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
                            <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl'>Book Appointment</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
