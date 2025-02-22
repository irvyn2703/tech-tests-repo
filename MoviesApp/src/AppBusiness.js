import { useState } from "react";

export default function AppBusiness() {
  const [movies, setMovies] = useState({ Response: "False" });

  const handleMovies = (movies) => {
    setMovies(movies);
  };

  return {
    handleMovies,
    movies,
  };
}
