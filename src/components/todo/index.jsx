import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import { Todo } from "./Todo";

const Todos = () => {
  // Todos comes from the reducer attribute name in configureStore
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo />
      <div>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todo props={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
