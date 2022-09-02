import { createSignal, Component } from "solid-js"

const Counter: Component = () => {
  const [count, setCount] = createSignal(0)
  
  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count => count - 1)

  return (
    <div>
      <button class="bg-gray-100 active:bg-gray-200 text-xs rounded px-3 py-2" onClick={decrement}>-</button>
      <span class="text-xs px-4">Count: {count}</span>
      <button class="bg-gray-100 active:bg-gray-200 text-xs rounded px-3 py-2" onClick={increment}>+</button>
    </div>
  )
}

export default Counter