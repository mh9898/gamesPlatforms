import useData from "./useData.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  // "rating": 0,
  // "rating_top": 0,
}



const useGames = () => useData<Game>("/games")

export default useGames;
