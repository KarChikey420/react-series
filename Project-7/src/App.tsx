import './App.css'

function App() {
  return (
    <>
    <Todo 
     title='gym'
     description='i want to go gym'
     completed={false}/>
    </>
  )
}

interface TodoProps{
  title: string,
  description: string,
  completed: boolean
}

function Todo(props:TodoProps){
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>Completed: {props.completed ? "Yes" : "No"}</p>
  </div>
}

export default App
