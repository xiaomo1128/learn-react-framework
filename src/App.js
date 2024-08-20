import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  function addTodo(params) {
    console.log('addTodo', params);
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList foo="hello foo" />
    </div>
  );
}

export default App;
