class Task {
  constructor({ id, title, completed }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  mesaageSuceess() {
    return this.title + " created successfully with id: " + this.id;
  }

  static fromJSON(task) {
    return new Task({
      id: task.id || task._id,
      title: task.title,
      completed: task.completed,
    });
  }

  static fromJSONArray(arrayTasks) {
    return arrayTasks.map(
      (task) =>
        new Task({
          id: task.id || task._id,
          title: task.title,
          completed: task.completed,
        })
    );
  }
}

export default Task;
