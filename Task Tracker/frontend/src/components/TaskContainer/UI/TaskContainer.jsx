import InputCreateTask from "../../InputCreateTask/UI/InputCreateTask";
import Task from "../../Task/UI/Task";

export default function TaskContainer() {
  return (
    <div className="grid w-11/12 m-auto mt-10 gap-8">
      <InputCreateTask />
      <main>
        <Task />
        <Task />
        <Task />
      </main>
    </div>
  );
}
