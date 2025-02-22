export default function SearchUI() {
  return (
    <header className="flex items-center flex-col">
      <h1 className="font-bold text-5xl m-5 text-blue-50">Movies App</h1>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Buscar una pelicula ..."
          className="rounded-l-lg w-2/3 p-2 bg-blue-100"
        />
        <button className="bg-blue-500 p-2 pl-5 pr-5 rounded-r-lg text-white cursor-pointer hover:bg-blue-700 duration-150 ease-in">
          Buscar
        </button>
      </div>
    </header>
  );
}
