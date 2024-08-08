import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div className='px-6' >
            <h1 className='font-semibold py-3 text-3xl text-white' >{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar' >
                <div className='flex gap-4' >
                    {movies.map(movie => <MovieCard posterPath={movie.poster_path} key={movie.id} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList