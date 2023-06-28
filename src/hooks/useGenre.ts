import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGames = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenre(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, errorMessage, isLoading };
};

export default useGames;
