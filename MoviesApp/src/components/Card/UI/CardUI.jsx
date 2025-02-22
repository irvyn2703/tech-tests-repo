export default function CardUI({ title, year, poster, type }) {
  return (
    <div className="rounded-xl bg-blue-900 h-auto overflow-hidden w-80 flex flex-col justify-between min-h-60">
      <img src={poster} alt={`portada de la pelicula ${title}`} />
      <div className="flex flex-col items-center p-2 gap-2">
        <h2 className="font-bold text-blue-50">{title}</h2>
        <p className="text-blue-50">
          {type} - {year}
        </p>
      </div>
    </div>
  );
}
