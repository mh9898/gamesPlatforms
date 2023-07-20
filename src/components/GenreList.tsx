import {Spinner, Image, List, ListItem, HStack, Button} from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre ,onSelectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres()

    if (error) return null

    if (isLoading) return  <Spinner/>

    return (
        <>
            {/*<Heading fontSize={'2xl'}>Genres</Heading>*/}
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit={'cover'}
                                boxSize="32px"
                                borderRadius={8}
                                src={getCropImageUrl(genre.image_background)}
                            />
                            <Button whiteSpace='normal' textAlign={'left'}
                                    fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal' }
                                    onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>

    );
};

export default GenreList;