import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/heroElem";
import Button from "./components/button";
import { IoCloseSharp } from "react-icons/io5";

const App = () => {
  // const dataList = ;
  const [datalist, setDatalist] = useState(() => {
    const savedTasks = localStorage.getItem("todo_tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [
        {
          Title: "Learn React Fundamentals",
          desc: "Complete an online course or tutorial series covering React basics, including components, state, props, and hooks. Practice building small components and understanding the React component lifecycle.",
          completed: false,
        },
        {
          Title: "Set Up Development Environment",
          desc: "Install Node.js, npm, and create-react-app. Configure VS Code with React and ESLint extensions. Set up a new React project using create-react-app and familiarize yourself with the project structure.",
          completed: false,
        },
        {
          Title: "Design Todo List UI",
          desc: "Create wireframes or mockups for the todo list app. Design components for task input, task list, individual task items, and potential features like editing, deleting, and marking tasks as complete.",
          completed: false,
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("todo_tasks", JSON.stringify(datalist));
  }, [datalist]);

  function submitHandler(e) {
    e.preventDefault();
    if (newTitle.trim() && newTask.trim()) {
      const newTaskObject = {
        Title: newTitle,
        desc: newTask,
        completed: false,
      };
      setDatalist([...datalist, newTaskObject]);
      setNewTask("");
      setNewTitle("");
      setOpenPopUp(false);
    }
  }

  const [openPopUp, setOpenPopUp] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTask, setNewTask] = useState("");

  function deleteTask(index) {
    const updatedList = datalist.filter((_, i) => i !== index);
    setDatalist(updatedList);
  }

  function toggleCompleted(index) {
    const updatedList = [...datalist];
    updatedList[index].completed = !updatedList[index].completed;
    setDatalist(updatedList);
  }

  return (
    <>
      <Navbar />
      <Hero Data={datalist} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      <div className="absolute bottom-5 right-5 ">
        <div
          className={`${openPopUp ? "hidden" : "None"}`}
          onClick={() => {
            setOpenPopUp(!openPopUp);
          }}
        >
          <Button purpose="Add task" />
        </div>
      </div>
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70vw] h-[80vh] rounded-xl z-10 font-semibold flex pt-10 pb-5 bg-zinc-600 ${
          openPopUp ? "justify-center" : "hidden"
        }`}
      >
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="w-[80%] h-full flex flex-col gap-4 text-2xl text-black"
        >
          <input
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
              // console.log(e.target.value)
            }}
            type="text"
            placeholder="Title"
            className="px-2 py-1 rounded-md outline-none"
          />
          <textarea
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            cols="44"
            rows="9.5"
            placeholder="Enter detailed task description"
            className="px-2 py-1 rounded-md font-normal outline-none"
            aria-setsize="fixed"
          ></textarea>
          <button
            type="submit"
            className=" absolute bottom-0 right-0 my-5 mx-8 bg-emerald-600 text-slate-200 max-w-fit py-2 px-3 rounded-md ml-auto hover:bg-emerald-700 hover:scale-105 transition-all  "
            onClick={() => {
              setOpenPopUp(!openPopUp);
            }}
          >
            Add Task
          </button>
        </form>
        <button
          onClick={() => {
            setOpenPopUp(!openPopUp);
          }}
          className="absolute z-20 right-0 top-0 mx-7 my-2 rotate-90 hover:bg-rose-500 rounded-full hover:rotate-180 transition-all p-1"
        >
          <IoCloseSharp  className="size-8"/>
        </button>
      </div>
    </>
  );
};
console.log(Date);
export default App;
