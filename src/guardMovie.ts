import guardObject from "./guardObject"

const guardMovie = (result: unknown) => {
    const resultObject = guardObject(result)
    if (!('title' in resultObject)) {
        throw new Error('There is no title.')
    }
    if (typeof resultObject.title !== 'string') {
        throw new Error('Title is not a string.')
    }
    if (!('id' in resultObject)) {
        throw new Error('There is no id.')
    }
    if (!('poster_path' in resultObject)) {
        throw new Error('There is no poster_path')
    }
    if (typeof resultObject.poster_path !== 'string' && resultObject.poster_path !== null) {
        throw new Error('Poster path is not a string or null')
    }
    if (typeof resultObject.id !== 'number') {
        throw new Error('Id is not a number.')
    }
    if (!('overview' in resultObject)) {
        throw new Error('There is no overview')
    }
    if (typeof resultObject.overview !== 'string') {
        throw new Error('Overview is not a string')
    }
    const movie = {
        title: resultObject.title,
        id: resultObject.id,
        poster_path: resultObject.poster_path,
        overview: resultObject.overview
    }
    return movie
}

export default guardMovie;