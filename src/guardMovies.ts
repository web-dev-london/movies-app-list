import guardMovie from "./guardMovie";
import guardObject from "./guardObject";

const guardMovies = (props: {
    data: unknown;
}) => {
    const dataObject = guardObject(props.data)
    if (!('results' in dataObject)) {
        throw new Error('There is no results.')
    }

    if (!Array.isArray(dataObject.results)) {
        throw new Error('Results is not an array.')
    }
    const movies = dataObject.results.map((result: unknown) => {
        const movie = guardMovie(result)
        return movie
    })
    return movies
}

export default guardMovies