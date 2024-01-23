import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";
function TodoForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    defaultDate();
  }, []);

  const defaultDate = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    const todo = {
      title: title,
      isCompleted: false,
      priority: priority,
      date: date,
    };
    dispatch(addTodo(todo));
    setTitle("");
    setPriority("");
    defaultDate();
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className=" rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        className="rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={priority.toString()}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="" disabled>
          Select Priority
        </option>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>

      <input
        type="date"
        value={date}
        className=" rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
