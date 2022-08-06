import React from "react";

export default function Chatroom() {
    return (
        <>
            <div className='grid place-items-center'>
                <h1 className='text-5xl font-semibold py-2 text-white'>Chatroom</h1>
                <div className="bg-secondary w-36 h-1 rounded-full"></div>
            </div>
            <div className="grid place-items-center">
                <iframe className="w-4/5 h-screen" src="http://localhost:5000/" title="chatroom" frameborder="0"></iframe>
            </div>
        </>
    );
}
