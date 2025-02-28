import TasksBusiness from "../Business/TaskBusiness";

export default function Task({ id, title, completed }) {
  const { isCompleted, handleCompleted, isDeleted, handleDelete, loading } =
    TasksBusiness({
      id,
      completed,
    });

  return (
    <div
      className={`
        transition-[height]
        border-b-2 border-b-gray-300 flex items-center p-2
        ${isDeleted ? "hidden" : "block"}
      `}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        disabled={loading}
        onChange={handleCompleted}
        className="
        appearance-none cursor-pointer size-6 border-2 rounded-md 
        checked:bg-gray-400 
        disabled:border-0 disabled:bg-gray-100
        "
      />
      <span
        className={`
          transition-all duration-1500
          relative flex-grow pr-4 pl-4 text-justify line-clamp-1
          after:transition-all
          after:absolute after:h-0.5 after:block after:bg-gray-600 after:top-1/2 after:left-1/2 after:-translate-x-1/2
          ${
            !isCompleted ? "after:w-0 opacity-100" : "after:w-97/100 opacity-50"
          }
        `}
      >
        {title}
      </span>
      <button className="cursor-pointer" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
}
