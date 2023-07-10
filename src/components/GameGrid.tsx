import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeltion from "./GameCardSkeltion";


interface Props{
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const { data, errorMessage, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletions = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errorMessage && <Text>{errorMessage} </Text>}
      <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding="10px"
          spacing={3}
      >
        {isLoading &&
          skeletions.map((skeletion) => (
            <GameCardContainer key={skeletion}>
              <GameCardSkeltion  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
