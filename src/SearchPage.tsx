import { Wrap, WrapItem } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import MovieCard from "./MovieCard";
import QueryForm from "./QueryForm";
import { Movie } from "./types";
import Clink from "clink-react";



const SearchPage = (props: {
    query: string;
    results: Movie[]
    handleQuery: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {

    const resultViews = props.results.map((result) => {
        return (
            <WrapItem
                key={result.id}
            >
                <Clink
                    to={`/movie/${result.id}`}
                >
                    <MovieCard
                        key={result.id}
                        movie={result}
                    />
                </Clink>
            </WrapItem>
        )
    })

    return (
        <>
            <QueryForm
                query={props.query}
                handleQuery={props.handleQuery}
                style={{ marginBottom: '20px' }}
            />

            <Wrap
                marginX={'auto'}
            >
                {resultViews}
            </Wrap>
        </>
    )
}

export default SearchPage