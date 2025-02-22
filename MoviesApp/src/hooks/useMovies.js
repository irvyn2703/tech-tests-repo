import { useEffect } from "react";
import MovieService from "../services/MovieService";

export default function useMovies({
  search,
  changeSearch,
  handleChangeSearch,
  handleMovies,
}) {
  useEffect(() => {
    const fetchMovies = async () => {
      if (changeSearch.current) {
        try {
          const response = await MovieService.getMoviesByTitle({
            title: search,
          });
          handleMovies(response);
          handleChangeSearch();
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchMovies();
  }, [search]);
}
