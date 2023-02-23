import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    if (text === "") {
      return;
    }
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type={"text"}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="btn btn-add" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
