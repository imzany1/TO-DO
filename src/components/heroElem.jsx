import React, { useState } from "react";
import TaskTitle from "./taskTitle";
import { MdDelete } from "react-icons/md";

const Hero = (params) => {
  const [title, setTitle] = useState("Good Morning");
  const [desc, setDesc] = useState("");
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="bg-zinc-900 m-20 p-7 flex gap-3 rounded-lg h-[70vh] overflow-hidden mt-12 ">
      <div className="lhs-side-div bg-zinc-800 w-[30%] rounded-md rounded-l-xl relative overflow-y-scroll scroll-smooth p-4 py-6 ">
        {params.Data.map((elem, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setTitle(elem.Title);
                setDesc(elem.desc);
                setActiveIdx(idx);
              }}
            >
              <TaskTitle
                title={elem.Title}
                desc={elem.desc}
                id={idx}
                isCompleted={elem.completed}
                toggleCompleted={() => params.toggleCompleted(idx)}
              />
            </div>
          );
        })}
      </div>
      <div className="rhs-side-div bg-zinc-800 w-[70%] py-[22px] px-8 h-full font-semibold rounded-md rounded-r-xl relative">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl mb-2">{title}</h1>
            <p className="text-xl text-zinc-200">{desc}</p>
          </div>
          {activeIdx !== null && (
            <button
              onClick={() => {
                params.deleteTask(activeIdx);
                setTitle("Good Morning");
                setDesc("");
                setActiveIdx(null);
              }}
              className="p-2 hover:bg-zinc-700 rounded-full transition-all"
              title="Delete Task"
            >
              <MdDelete className="text-rose-500 text-3xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
