import { useState } from "react";
function App() {
  const [count,setCount] = useState(0)


  const increment = () => {
    count < 10 ? setCount(count + 1) : setCount(count)

  }
  const decrement = () => {
    count > 1 ? setCount( count - 1) : setCount(count)
    
  }
  
  const reset = () =>{
    setCount(0)
  }
  
  return (

    <div className="flex bg-black text-gray-300 min-h-screen flex-col gap-12 items-center justify-center">
     <div className="text-6xl">
     {count}
     </div>
    <div className="flex gap-4 ">
    <button onClick={increment} className="px-4 py-2 bg-pink-500 text-lg">increment</button>
        <button onClick={reset} className="px-4 py-2 bg-yellow-400 text-lg">reset</button>
    <button onClick={decrement} className="px-4 py-2 bg-pink-500 text-lg">decrement</button>
    </div>
    </div>
  );
}

export default App;
