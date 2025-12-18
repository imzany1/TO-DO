import React, { useState } from 'react'

const TaskTitle = (params) => {
  return (
    <>
        <button  className={`" flex justify-between items-center py-2 px-5 text-2xl bg-zinc-900 font-semibold border-2 rounded-md mb-2 text-left w-full ${params.isCompleted? "bg-zinc-800 ": "hover:bg-zinc-950 hover:text-[#fff] hover:scale-y-[103%] hover:scale-x-[102%]"} transition-all "`}>
        <span 
        style={{
          textDecoration: params.isCompleted ? 'line-through' : 'none',
          color: params.isCompleted ? 'gray' : 'white'
        }}
      >
        {params.title}
      </span>
          <input onClick={(e) => { e.stopPropagation(); params.toggleCompleted() }} type="checkbox" checked={params.isCompleted} onChange={() => {}} /> 
        </button>
    </>
  )
}

export default TaskTitle