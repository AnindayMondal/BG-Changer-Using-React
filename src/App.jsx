import React, { useState } from 'react'

const App = () => {
  const initialColor = "olive"
  const [color, setColor] = useState(initialColor)

  return (
    <div
      className='w-full h-screen duration-500'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor(initialColor)}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: initialColor }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
