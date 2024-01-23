import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleCompleted } from "../features/todo/TodoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const [todoList, setTodoList] = useState(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todos")) || []);
  }, [todos]);
  return (
    <>
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className={`flex my-1 border  border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
          <input
            type="checkbox"
            className="cursor-pointer "
            checked={todo.isCompleted}
            onChange={() => dispatch(toggleCompleted(todo.id))}
            disabled={todo.isCompleted}
          />
          <div className="w-full flex gap-x-3">
            <input
              type="text"
              className={`border outline-none  bg-transparent rounded-lg border-transparent
        ${todo.isCompleted ? "line-through" : ""}`}
              value={todo.title}
              readOnly
            />
            <button
              className={`text-sm font-medium cursor-default  rounded-full py-1 px-3  bg-transparent dark:bg-transparent border-2
                ${
                  todo.priority === "Priority1"
                    ? "border-yellow-500 text-yellow-500 dark:text-yellow-500 "
                    : todo.priority === "Priority2"
                    ? "border-orange-500 text-ornage-500 dark:text-orange-500 "
                    : "border-red-500 text-red-500 dark:text-red-500 "
                }
                ${todo.isCompleted ? "line-through" : ""}
             transition-opacity duration-[1.5s] delay-500 opacity-75`}
            >
              {todo.date.toString("dd-MM-yyyy")}
            </button>
          </div>
          {/* Delete Todo Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
