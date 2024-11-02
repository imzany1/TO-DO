import React, { useState } from "react";
import TaskTitle from "./taskTitle";

const Hero = (params) => {
const [title, setTitle] = useState("Good Morning")
const [desc, setDesc] = useState("")
  return (
    <div className="bg-zinc-900 m-20 p-7 flex gap-3 rounded-lg h-[70vh] overflow-hidden mt-12 ">
      <div className="lhs-side-div bg-zinc-800 w-[30%] rounded-md rounded-l-xl relative overflow-y-scroll scroll-smooth p-4 py-6 ">
      {params.Data.map((elem, idx)=>{
        return(
          <div
          key={idx}
           onClick={()=>{
            setTitle(elem.Title)
            setDesc(elem.desc)
           }} ><TaskTitle title = {elem.Title} desc={elem.desc} id={idx} />
           </div>
        )
      })}
      </div>
      <div className="rhs-side-div bg-zinc-800 w-[70%] py-[22px] px-8 h-full font-semibold rounded-md rounded-r-xl">
        <div>
          <h1 className="text-3xl mb-2" >{title}</h1>
          <p className="text-xl text-zinc-200">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
