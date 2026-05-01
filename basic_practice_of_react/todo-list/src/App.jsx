import { useState } from 'react'

export default function App(){
      const [task , setTask]= useState("")
      const [todo , setTodo]= useState([])

      const addTask = () =>{
        if (!task.trim()) return;
        setTodo([...todo,task])
        setTask("")
      }

      const deleteTask = (i) =>{
        setTodo(todo.filter((_, index)=> index !==i))
      }

      return <div>
        <input value={task} onChange={(e)=> setTask(e.targetvalue)}/>
        <button onClick={addTask}>Add</button>

        <ul>
        {todo.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
      </div>


}