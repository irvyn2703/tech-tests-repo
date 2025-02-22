import { useCallback, useRef, useState } from "react";

export default function SearchBusiness() {
  const inputRefSearch = useRef();
  const changeSearch = useRef(false);
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    setTimeout(() => {
      setSearch(inputRefSearch.current.value);
      changeSearch.current = true;
    }, 1000);
  });

  const handleChangeSearch = () => {
    changeSearch.current = false;
  };

  return {
    inputRefSearch,
    handleSearch,
    search,
    handleChangeSearch,
    changeSearch,
  };
}
