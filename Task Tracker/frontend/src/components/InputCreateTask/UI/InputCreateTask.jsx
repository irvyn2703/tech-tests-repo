export default function InputCreateTask() {
  return (
    <header>
      <label htmlFor="newTask">Task Tracker</label>
      <div>
        <input type="text" name="newTask" />
        <button>✒️</button>
      </div>
    </header>
  );
}
