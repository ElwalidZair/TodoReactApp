import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.js'

function App() {
  const name = "walid";
  return (
    <div className="todo-app">
      <TodoList></TodoList>
    </div>
  );
}

export default App;