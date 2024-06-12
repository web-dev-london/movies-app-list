import { Container, Heading } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import guardMovies from "./guardMovies";
import Home from "./Home";
import MoviePage from "./MoviePage";
import Navbar from "./Navbar";
import SearchPage from "./SearchPage";
import { Movie } from "./types";


const App = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('SearchParams', searchParams);
    const queryParam = searchParams.get('query') ?? ''
    console.log('Query Param', queryParam);
    const [results, setResults] = useState<Movie[]>([]);
    const [query, setQuery] = useState(queryParam);

    function handleQuery(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
        setSearchParams((params) => {
            params.set('query', e.target.value)
            return params
        })
    }



    const search = useCallback(async () => {
        const Authorization = `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`;
        const headers = {
            Authorization
        }
        const options = {
            headers
        }
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
        const response = await fetch(url, options);
        const data: unknown = await response.json()
        console.log("Data", data);
        const movies = guardMovies({
            data
        })
        setResults(movies)
    }, [query])

    useEffect(() => {
        search()
    }, [search])


    return (
        <>
            <Container
                maxW={'100%'}
            >
                <Navbar />
                <Heading>
                    Movies App
                </Heading>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/search"
                        element={
                            <SearchPage
                                query={query}
                                handleQuery={handleQuery}
                                results={results}
                            />
                        }
                    />
                    <Route
                        path="/movie/:movieId"
                        element={
                            <MoviePage />
                        }
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;