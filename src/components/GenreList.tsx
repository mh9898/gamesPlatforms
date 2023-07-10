import {Spinner, Image, List, ListItem, HStack, Button} from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre}: Props) => {
    const {data, isLoading, errorMessage} = useGenres()

    if (errorMessage) return null

    if (isLoading) return  <Spinner/>

    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                    <Image
                        boxSize="32px"
                        borderRadius={8}
                        src={getCropImageUrl(genre.image_background)}
                    />
                        <Button onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    );
};

export default GenreList;