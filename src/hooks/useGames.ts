import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
  background_image: string;
  // "rating": 0,
  // "rating_top": 0,
  // "platforms": []
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return { games, errorMessage };
};

export default useGames;
