import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Body from '../src/components/Body/Body'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Terminar el tp',
      created: 'December 25, 1995 13:30:00',

    },
    {
      text: 'Terminar el tp parte 1',
      created: 'December 25, 1997 13:30:00',
      completed: 'December 26, 1997 13:30:00'

    },
  ])
  // created
// completed

// text
  return (
    <div className="App">
      <Body setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
