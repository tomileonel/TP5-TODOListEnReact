import Title from '../Title/Title'
import Form from '../Form/Form'
import Todos from '../Todos/Todos';
const Body = ({ setTodos, todos }) => {
    return (
        
  <div className="body">
<Title/>
<Form setTodos = {setTodos} todos={todos}/>
<Todos setTodos = {setTodos} todos={todos}/>
</div>
    );
  }
  
  export default Body;

//   <div className="body">
//   <Titulo />
//   <div className="container" >

//   <div className="one-half column" >
//   <Subtitulo texto="CREAR MI CITA"/>
//   <Formulario setCitas={setCitas} citas={citas} />
//   </div>
//   <div className="one-half column">
//   <Subtitulo texto="ADMINISTRA TUS CITAS" />
//   <Citas setCitas={setCitas} citas={citas} />
//   </div>
//   </div>

// </div>