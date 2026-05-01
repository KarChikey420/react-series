import { useState } from 'react'

export default function App() {
  const [task, setTask] = useState('')
  const [todo, setTodo] = useState([])

  const addTask = () => {
    const trimmedTask = task.trim()

    if (!trimmedTask) return

    setTodo([...todo, { id: crypto.randomUUID(), text: trimmedTask }])
    setTask('')
  }

  const deleteTask = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
