export default function CardUI({ title, year, poster, type }) {
  return (
    <div className="rounded-xl bg-blue-900 w-fit h-auto overflow-hidden">
      <img src={poster} alt={title} />
      <div className="flex flex-col items-center p-2 gap-2">
        <h2 className="font-bold text-blue-50">{title}</h2>
        <p className="text-blue-50">
          {type} - {year}
        </p>
      </div>
    </div>
  );
}
