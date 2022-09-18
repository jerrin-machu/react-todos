import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos, settoDos] = useState([{ }])
  const [toDo,settoDo] = useState("")

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={toDo} onChange={ (e) => {
          settoDo(e.target.value)
          
        }} />
        <i className="fas fa-plus" onClick={() => {
          settoDos([...toDos,{ id: Date.now(), text:toDo, status: false} ,])
          console.log(toDos)
        }}></i>
      </div>
      {
        toDos.map((todo) => {
            return (
              < div key={ todo.id} className="todos" >
        <div className="todo">
          <div className="left" >
            <input type="checkbox" onChange={(e) =>{
             settoDos(toDos.filter((obj) => {
                if(obj.id === todo.id){
                  obj.status = e.target.checked
                }
                return obj
             }))
            }} name="" id="" value={todo.status}  />
            <p>{todo.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={(e) => {
              settoDos(toDos.filter((task) => {
                if(task.id != todo.id){
                  return task
                }
              }))
            }}></i>
          </div>
        </div>
      </div>
            )
        })



        
      
  }

  { toDos.map((todo) => {
    if(todo.status)
      return <h2> {todo.text}</h2>
  })}


    </div>
  );

 
}

export default App;