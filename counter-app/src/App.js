import React from 'react';
import { useState } from "react";
import "./App.css";

function App() {

  const [count,setcount] = useState(0)
  function DescHandler(){
      setcount(count-1)
    }
    function IncrHandler(){
      setcount(count+1)
    }
    function resethandler(){
      setcount(0)
    }

  return ( 

  <div className="w-[100vw] h-[100vh] flex justify-center 
  items-center bg-[#344151] flex-col gap-10">
    <h1 className="text-[#0398d4] font-2xl">INCREMENT AND DECREMENT</h1>
    <div className="bg-white flex flex-row gap-12 py-3
    rounded-sm text-[25px] text-[#344151]">
      <button onClick={DescHandler} className = "border-r-2 text-center w-20 text-5xl">
        -
      </button>
      <div className="font-bold text-5xl ">
        {count}
      </div>
      <button onClick={IncrHandler} className = "border-r-2 text-center w-20 text-5xl">
        +
      </button>
    </div>
    <button onClick={resethandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" >
      Reset
    </button>
  </div>


  );
}

export default App;