import React from 'react'
import Header from './Header'
import useNowPlyaingMovies from '../hooks/useNowPlyaingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptStatus = useSelector((store) => store.gpt.gptStatus);

  useNowPlyaingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {
        gptStatus ? <GptSearch /> : <><MainContainer />
          <SecondaryContainer /></>
      }

    </div>
  )
}

export default Browse