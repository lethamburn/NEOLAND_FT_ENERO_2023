import { useReducer } from "react";
import "./App.css";

const todoList = [
  {
    id: 1,
    title: "Study",
    completed: false,
  },
  {
    id: 2,
    title: "Clean",
    completed: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, todoList);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div className="App">
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(todo)}
            />
            <h2>{todo.title}</h2>
            <p> {JSON.stringify(todo.completed)}</p>
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;
