import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-[100%] pt-36 px-12 absolute text-white bg-gradient-to-r from-black  aspect-video'>
            <h1 className='text-6xl font-bold' >{title}</h1>
            <p className='py-6 text-lg w-1/3'>{overview}</p>
            <div>
                <button className='bg-white text-black px-12 py-3 text-xl rounded-lg hover:opacity-90 ' >Play</button>
                <button className='bg-gray-300 text-white px-12 py-3 text-xl rounded-lg bg-opacity-40 mx-2' >More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle