import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../features/todo/todoSlice";
import { deleteIcon, editIcon } from "../../utils/icons";

export const Todo = ({ props }) => {
  const [isEdit, seIsEdit] = useState(false);
  const [text, setText] = useState(props.text);

  const dispatch = useDispatch();

  const deleteTodoHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const updateTodoHandler = (event) => {
    event.preventDefault();
    const todo = {
      id: props.id,
      text: text,
    };
    dispatch(updateTodo(todo));
    seIsEdit(false);
  };

  return (
    <>
      {isEdit ? (
        <div>
          <form onSubmit={updateTodoHandler}>
            <input
              type={"text"}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button
              className="btn btn-edit"
              style={{
                color: "rgb(13, 13, 13",
                backgroundColor: "rgb(238, 198, 159)",
              }}
              type="submit"
            >
              Update todo
            </button>
          </form>
        </div>
      ) : (
        <>
          <span>{props.text}</span>
          <button
            className="btn btn-edit"
            onClick={() => seIsEdit((prev) => !prev)}
          >
            {editIcon}
          </button>
          <button
            className="btn btn-delete"
            onClick={() => deleteTodoHandler(props.id)}
          >
            {deleteIcon}
          </button>
        </>
      )}
    </>
  );
};
