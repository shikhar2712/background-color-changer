import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
      <div
        className=" w-full h-screen duration-200  "
        style={{ backgroundColor: color }} //this is syntax to implement state and apply CSS properties to react server
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolor("red")}
              className="outline-none px-4 bg-red-600 py-1 rounded-full"
            >
              red
            </button>
            <button
              onClick={() => setcolor("green")}
              className="outline-none px-4 bg-green-600 py-1 rounded-full"
            >
              green
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="outline-none px-4 bg-blue-600 py-1 rounded-full"
            >
              blue
            </button>
            <button
              onClick={() => setcolor("black")}
              className="outline-none px-4 py-1 rounded-full bg-slate-600 text-white"
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
