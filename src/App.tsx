import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <header>
        <p className="pb-3 text-2xl">Vite + React + Tailwind CSS Template</p>
        <p>
          <button className="pt-1 pb-1 pl-2 pr-2 text-sm justify-center flex mx-auto text-purple-100 bg-purple-400 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
