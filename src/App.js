import './App.css';
import {NavBar} from './Components/UI/NavBar'
import {AddTodo,Todos} from './Components/Todo/Todo'
import { useState } from 'react';

let todos = [
  {
      id:1,
      date: (new Date(1,1,1)).toLocaleString(),
      title:"Todo1",
      desc: "Todo1 Desc"
  },
  {
      id:2,
      date: (new Date(9,10,1)).toLocaleString(),
      title:"Todo2",
      desc: "Todo2 Desc"
  }
]

function App() {

  let [todoList, setTodos] = useState(todos);
  let [idx , setIdx] = useState(null)
  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');
  let [button_value, setButtonValue] = useState('Add');

  const editMode = (idx,title,desc) => {
    setIdx(idx);
    setTitle(title);
    setDesc(desc);
    setButtonValue('Update');
    return [title,desc]
  }

  return (
    <div>
      <NavBar />
      <AddTodo idx={idx} setIdx={setIdx} title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} button_value={button_value} setButtonValue={setButtonValue} todoList={todoList} setTodos={setTodos} />
      <Todos todoList={todoList} setTodos={setTodos} editMode={editMode}/>
    </div>
    )
}

export default App;
