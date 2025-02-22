import { useEffect } from "react";

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
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=prueba&s=${search}`
          );
          const data = await response.json();
          handleMovies(data);
          handleChangeSearch();
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchMovies();
  }, [search]);
}
