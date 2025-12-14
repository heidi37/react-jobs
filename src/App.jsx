import React from "react"

const App = () => {
  const name = "Helvetica"
  return (
    <>
      <div className="font-sans text-5xl">This should be {name}</div>
      <div className="grid grid-cols-[var(--grid-70-30)] gap-4">
        <div className="bg-blue-500 text-white">70%</div>
        <div className="bg-red-500 text-white">30%</div>
      </div>
    </>
  )
}

export default App
