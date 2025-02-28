import InputCreateTaskBusiness from "../Business/InputCreateTaskBusiness";

export default function InputCreateTask({ handleToggleNewTask }) {
  const { newTask, handleCreateTask } = InputCreateTaskBusiness({
    handleToggleNewTask,
  });

  return (
    <header className="grid gap-7">
      <label htmlFor="newTask" className="text-2xl">
        Task Tracker
      </label>
      <div className="flex border-2 rounded-lg">
        <input
          type="text"
          name="newTask"
          className="flex-grow p-2 focus:outline-none text-2xl overflow-ellipsis"
          placeholder="Start writing and press enter to create task"
          ref={newTask}
        />
        <button
          className="bg-black p-2 m-2 flex-shrink-0 rounded-lg text-blue-50 cursor-pointer"
          onClick={handleCreateTask}
        >
          Enter
        </button>
      </div>
    </header>
  );
}
