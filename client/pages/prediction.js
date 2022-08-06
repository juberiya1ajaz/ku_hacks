import React from 'react'
import Link from 'next/link'

export default function Disease() {

  return (
    <div className='text-white'>

      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold">Disease prediction</h1>
        <div className='bg-blue-500 h-1 w-96 my-2 rounded-lg'></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-16 pb-24">

        <div className='m-8'>
          <Link href="/stomactTumor">
            <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
              <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Gastrointestinal Stomach Tumor</div>
            </div>
          </Link>
        </div>

        <div className='m-8'>
          <Link href="/brainTumor">
            <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
              <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Brain Tumor</div>
            </div>
          </Link>
        </div>

        <div className='m-8'>
          <Link href="/skinCancer">
            <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
              <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Skin Cancer</div>
            </div>
          </Link>
        </div>

        <div className='m-8'>
          <Link href="/parkinson">
            <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
              <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Parkinson Prediction</div>
            </div>
          </Link>
        </div>

        <div className='m-8'>
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">More comming soon...</div>
          </div>
        </div>

      </div>
    </div>
  )
}
