import React, {useState} from "react";
import TodoList from "./Todo/TodoList";
import AddTodo from './Todo/AddTodo';
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: true, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value = {{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1 className="header">My ToDo list:</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p className="no-todos">No todos for today.</p>}

        
      </div>
    </Context.Provider>
  );
}

export default App;
