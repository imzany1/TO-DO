import React from "react";
import { Link } from "react-router-dom";


const button = (params) => {
  return (
    <>
      <button
        className="inline-block m-5 px-4 py-2 rounded-md  bg-slate-500 hover:bg-slate-600 hover:text-slate-200 hover:scale-105 transition-all  "
        to={params.path}
      >
        {params.purpose}
      </button>
    </>
  );
};

export default button;
