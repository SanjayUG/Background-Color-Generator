import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}  //onClick needs a function and setColor is a referance
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "red"}}
            >Red</button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "green"}}
            >Green</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "olive"}}
            >Olive</button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "purple"}}
            >Purple</button>
            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "cyan"}}
            >Cyan</button>
            <button
              onClick={() => setColor("magenta")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "magenta"}}
            >Magenta</button>
            <button
              onClick={() => setColor("lime")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "lime"}}
            >Lime</button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "brown"}}
            >Brown</button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "pink"}}
            >Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
