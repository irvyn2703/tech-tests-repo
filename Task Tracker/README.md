You are required to create a task tracker that lets users add new tasks, mark them as complete, or delete them. Completed tasks will be moved to the end of the list and will have strikethrough, and users can unmark tasks to return them to the pending list.

Here is the mockup of the task tracker:

![Task Tracker Mockup](./assets/task-tracker.png)

Hint
Store your tasks in an array of objects, where each object represents a task with properties like description and status (completed or not). Whenever a new task is added, updated, deleted, or marked as complete/uncomplete, update the tasks array. Write a function renderTasks which will remove all tasks from the DOM and re-render them based on the updated tasks array.

This project will help you practice array manipulation, event handling, and dynamic DOM updates using JavaScript.

# config .env

backend:
PORT = número de puerto
MONGO_URI = URL para conectarse a mongo DB

frontend:
VITE_API_URL = URL del backend

# Result

![Task Tracker Mockup](./assets/back.gif)

![Task Tracker Mockup](./assets/front.gif)
