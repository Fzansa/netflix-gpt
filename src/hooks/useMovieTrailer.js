import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/contants";


const useMovieTrailer = (moviId) => {
    const dispatch = useDispatch();
    async function getMovieVideo() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${moviId}/videos?language=en-US`, API_OPTION);
        const json = await data.json();
        const filterData = json.results.filter(vdo => vdo.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json[0];
        dispatch(addTrailer(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useMovieTrailer;