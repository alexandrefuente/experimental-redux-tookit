import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../features/todo/todoSlice";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-pencil"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <path d="M13.5 6.5l4 4"></path>
            </svg>
          </button>
          <button
            className="btn btn-delete"
            onClick={() => deleteTodoHandler(props.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-trash-x-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                stroke-width="0"
                fill="currentColor"
              ></path>
              <path
                d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </>
      )}
    </>
  );
};
