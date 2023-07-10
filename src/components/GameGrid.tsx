import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeltion from "./GameCardSkeltion";
import {GameQuery} from "../App.tsx";


interface Props{
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, errorMessage, isLoading } = useGames(gameQuery);
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
