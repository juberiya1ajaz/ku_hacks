import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white py-4'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>ScanCure is a web application where users can take a Parkinson's test to check if they have Parkinson's or not. There are many other tests available where you can quickly know whether your symptoms are concerning or not. These tests include Gastrointestinal Stomach Tumor, Brain Tumor, Skin Cancer, and Parkinson's. We have provided a secure and robust payment method based on blockchain.</p>

                    <Link href="/prediction">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Disease Prediction</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <Image src="/assets/hero.svg" alt="img" width="450" height="450" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <Image src="/assets/feat.svg" alt="img" width="450" height="450" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-3xl py-4 tracking-wider'>ScanCure is a web app where you can:
                    </p>
                    <ul className="text-2xl">
                        <li className="list-disc">Smart disease prediction.</li>
                        <li className="list-disc">Contact doctor for any help.</li>
                        <li className="list-disc">Secure payment using blockchain.</li>
                        <li className="list-disc">Chat in a decentralized chatroom using Hedera.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
