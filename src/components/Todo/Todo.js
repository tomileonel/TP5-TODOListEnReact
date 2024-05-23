const Todo = ({ setTodos, todos, todo }) => {
  const Completar = () => {
      // Deberiamos:
      /**
       * Agarrar el objecto del array todos
       * Cambiarlo
       * Actualizar el array llamando a la funcion setTodos
       */
      const todo = todos.find((item) => item.text === todo.text);
      if (todo) {
        todo.completed = new Date();
      }

      

  };

  return (
    <li
      onClick={Completar}
      data-created={todo.created}
      data-completed={todo.completed || ""}
    >
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>{" "}
      - Creado: {new Date(todo.created).toLocaleString()}
      {todo.completed && ` - Completado: ${new Date(todo.completed).toLocaleString()}`}
    </li>
  );
};

export default Todo;
