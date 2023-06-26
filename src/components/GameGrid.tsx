import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeltion from "./GameCardSkeltion";

const GameGrid = () => {
  const { games, errorMessage, isLoading } = useGames();
  const skeletions = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errorMessage && <Text>{errorMessage} </Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletions.map((skeletion) => <GameCardSkeltion key={skeletion} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
