const Todo = ({ setTodos, todos, text, created, completed }) => {

    const Completar = (elemento ) => {

    };
  
    return (
      <li onClick={Completar(this)} data-created={created} data-completed={completed || ''}>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span> - Creado: {new Date(created).toLocaleString()}
        {completed && ` - Completado: ${new Date(completed).toLocaleString()}`}
      </li>
    );
  };
  
  export default Todo;
  
  