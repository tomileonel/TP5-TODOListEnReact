import Todo from "../Todo/Todo";
const Todos = ({ todos, setTodos }) => {
  return (
    <div className="citas">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
        />
      ))}
    </div>
  );
};
export default Todos;
