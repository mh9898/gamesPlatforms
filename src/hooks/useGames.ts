import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
      });

    // return () => controller.abort();
  }, []);

  return { games, errorMessage };
};

export default useGames;
