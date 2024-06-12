import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard";
import { Movie } from "./types";
import { useEffect, useState } from "react";
import guardMovie from "./guardMovie";

const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/';

const MoviePage = () => {
    const [details, setDetails] = useState<Movie>();
    const params = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            const Authorization = `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`;
            const headers = {
                Authorization
            }
            const options = {
                headers
            }
            const movieUrl = `${movieDetailsUrl}${params.movieId}`
            const res = await fetch(movieUrl, options)
            const data: unknown = await res.json()
            const movie = guardMovie(data)
            setDetails(movie)
        }
        fetchDetails()
    }, [params.movieId])


    if (details === undefined)
        return <>Movie not found.</>
    return (
        <MovieCard movie={details} />
    )
}

export default MoviePage