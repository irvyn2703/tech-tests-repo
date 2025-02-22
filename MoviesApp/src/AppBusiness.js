import { useState } from "react";

export default function AppBusiness() {
  const [movies, setMovies] = useState({ response: "False" });

  const handleMovies = (movies) => {
    console.log(movies);
    setMovies(movies);
  };

  return {
    handleMovies,
    movies,
  };
}
