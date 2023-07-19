// import useData from "./useData.ts";
import geners from "../data/geners.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({data: geners, isLoading: false, error: null}) //useData<Genre>("/genres")

export default useGenres;
