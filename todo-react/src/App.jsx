import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "../src/features/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-white min-h-screen shadow-md  rounded-xl py-8">
          <div className="w-full max-w-3xl mx-auto px-4 py-3 text-[#172842]">
            <h1 className="text-2xl font-bold text-center mb-4 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap justify-center">
              {/* <div className="w-full"> */}
              <TodoList />
              {/* </div> */}
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
