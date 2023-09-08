import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "read a book",
    },
    {
      id: 2,
      text: "go to shop",
    },
    {
      id: 3,
      text: "meet friends",
    },
  ]);

  const dltTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = (task) => {
    const newId = Math.floor(Math.random() * 1000000);
    const newTask = {id: newId, text: task}
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header text='ToDo'/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} dlt={dltTask}/> : <p className="move">Хоосон байна...</p>}
    </div>
  )
}

export default App
