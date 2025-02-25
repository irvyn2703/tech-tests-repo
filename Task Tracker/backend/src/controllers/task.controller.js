export const getTasks = (req, res) => {
  res.json({ message: "Obteniendo todas las tareas" });
};

export const createTask = (req, res) => {
  res.json({ message: "Creando nueva tarea" });
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminando tarea con ID ${id}` });
};
