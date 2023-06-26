import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Img } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Img src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
