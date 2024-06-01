import {useState} from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import List from'./components/List/List'

function App() {
  const [text,setText]= useState('');
  const [todolist,setTodolist]=useState([])
  const addItem=()=>
    {
     const  newTodoItem=
      {
        id:uuidv4(),
        item:text,
        done:false
      }
      setTodolist([...todolist,newTodoItem])
      setText('')
    }
    console.log(todolist)
  return (
    <div className="App">
      <h1>My todo list</h1>
      <div className="adder">
        <input type="text" placeholder="Add items" value={text} onChange={(e)=>setText(e.target.value)}/>
        <span onClick={addItem}>+</span>
      </div>
      <List todolist={todolist}/>
    </div>
  );
}

export default App;
