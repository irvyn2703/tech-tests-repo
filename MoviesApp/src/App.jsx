import "./App.css";
import CardUI from "./components/Card/UI/CardUI";
import SearchUI from "./components/Search/UI/SearchUI";
import { Search } from "./mocks/with-results.json";

function App() {
  return (
    <>
      <SearchUI />
      <main className="flex flex-wrap gap-20 p-4 justify-center">
        {Search.map((movie) => (
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
