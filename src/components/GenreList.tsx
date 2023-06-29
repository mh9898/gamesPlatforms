
import useGenres from "../hooks/./useGenres.ts";
import {Spinner} from "@chakra-ui/react";


const GenreList = () => {
    const {data, isLoading, errorMessage} = useGenres()

    if (errorMessage) return null

    if (isLoading) return  <Spinner/>

    return (
        <>
        <ul>
            {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        </>
    );
};

export default GenreList;