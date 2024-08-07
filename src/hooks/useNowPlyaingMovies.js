import { useDispatch } from "react-redux";
import { addNowPlyaingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/contants";
import { useEffect } from "react";

const useNowPlyaingMovies = () => {
    const dispatch = useDispatch();
    const getNowPLayingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
        const json = await data.json();
        dispatch(addNowPlyaingMovies(json.results));
    }

    useEffect(() => {
        getNowPLayingMovie();
    }, []);

}

export default useNowPlyaingMovies;