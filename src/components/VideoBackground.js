import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    return (
        <div className='w-[100%]' >
            <iframe className='w-[100%] aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?rel=0&amp;autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='1'></iframe>
        </div>
    )
}

export default VideoBackground