import { useEffect } from "react";

export default function useMovies({ search, changeSearch }) {
  useEffect(() => {
    console.log({ search });
    console.log(changeSearch.current);
  }, [search]);
  return {};
}
