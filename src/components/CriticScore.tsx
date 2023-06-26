import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorScore = score > 89 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={colorScore}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
