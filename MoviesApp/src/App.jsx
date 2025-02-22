import "./App.css";
import AppBusiness from "./AppBusiness";
import CardUI from "./components/Card/UI/CardUI";
import SearchUI from "./components/Search/UI/SearchUI";

function App() {
  const { movies, handleMovies } = AppBusiness();

  return (
    <>
      <SearchUI handleMovies={handleMovies} />
      <main className="flex flex-wrap gap-20 p-4 justify-center">
        {movies.response !== "False" &&
          movies.Search?.map((movie) => (
            <CardUI
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
            />
          ))}
      </main>
    </>
  );
}

export default App;
