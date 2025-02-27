export default function Task() {
  return (
    <div className="border-b-2 border-b-gray-300 flex items-center p-2">
      <input type="checkbox" value={false} className="cursor-pointer size-6" />
      <span
        className="
          transition-all
          relative flex-grow pr-4 pl-4 text-justify line-clamp-1
          after:absolute after:h-0.5 after:block after:bg-gray-600 after:top-1/2 after:left-1/2 after:-translate-x-1/2
          after:w-97/100
        "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsam?
      </span>
      <button className="cursor-pointer">🗑️</button>
    </div>
  );
}
