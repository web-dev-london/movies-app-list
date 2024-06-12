import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Movie } from "./types";


const MovieCard = (props: {
    movie: Movie;
}) => {
    const imageBase = 'https://image.tmdb.org/t/p/original'
    const imageSrc = `${imageBase}${props.movie.poster_path}`

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={imageSrc}
                        alt={props.movie.title}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.movie.title}</Heading>
                        <Text>
                            {props.movie.overview}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default MovieCard