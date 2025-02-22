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
        {movies.Response === "False" ? (
          <h1 className="text-2xl text-center font-bold text-blue-50 p-7">
            Sin resultados
          </h1>
        ) : (
          movies.Search?.map((movie) => (
            <CardUI
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
            />
          ))
        )}
      </main>
    </>
  );
}

export default App;
