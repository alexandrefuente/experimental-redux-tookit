import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random(1, 300),
        text: action.payload,
      };
      // state.push(todo);

      // return a new data
      return [todo, ...state];
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.text = text;
    },
    deleteTodo: (state, action) => {
      return [...state.filter((todo) => todo.id !== action.payload)];
    },
  },
});
// this is for dispatch
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
// this is for configureStore
export default todoSlice.reducer;
