import logo from '../../logo.svg';
import React from 'react';
import './Todo.css';



// Add new Todo
export const AddTodo = (props)=>{
    const SubmitHandler = (event)=> {
        event.preventDefault();
        if (!props.title || !props.desc)
        return false;
        
        if(props.idx){
            let updatedTodoList = props.todoList.map((item)=>{
                if (item.id == props.idx){
                    item.date = (new Date()).toLocaleString();
                    item.title = props.title;
                    item.desc = props.desc;
                }
                return item;
            })
            props.setTodos(updatedTodoList);
        } else {
            let newTodo = {
                id: Math.random(),
                date: (new Date()).toLocaleString(),
                title: props.title,
                desc: props.desc,
            }
            props.setTodos([newTodo,...props.todoList])
        }
        props.setTitle('');
        props.setDesc('');
        props.setButtonValue('Add')
    
    }

    return (
        <div className="addtodo__container">
            <form onSubmit={SubmitHandler} className="addtodo__form">
                
                <div className="addtodo__form_data">
                    <input onChange={(event)=>{props.setTitle(event.target.value)}} className="addtodo__form__title" type='text' placeholder='Todo' value={props.title}/>
                    <textarea onChange={(event)=>{props.setDesc(event.target.value)}} className="addtodo__form__desc" type='text' placeholder='Todo Description' value={props.desc}/>
                </div>
                <input className="addtodo__form__submitbtn" type="submit" value={props.button_value}></input>
            </form>
        </div>
    );
}

const todo = (item,todoList,setTodos,editMode)=>{
    const EditTodo = (event)=>{
        let idx = event.target.parentNode.parentNode.parentNode.id;
        let title = event.target.parentNode.parentNode.parentNode.querySelector('.todo__title').innerText;
        let desc = event.target.parentNode.parentNode.parentNode.querySelector('.todo__desc').innerText;
        editMode(idx,title,desc);
        
    }
    
    const DeleteTodo = (event)=>{
        let idx = event.target.parentNode.parentNode.parentNode.id;
        console.log(idx)
        let updatedTodoList = todoList.filter((item) => item.id !== idx);
        setTodos(updatedTodoList);
    }
    return (
        <div className="todo__container" id={item.id} >
            <img src={logo} className="todo__status" />
            <div className="todo__data">
                <text className="todo__title">{item.title}</text>
                <p className="todo__desc">{item.desc}</p>
            </div>
            <div className="todo__right">
                <div className="todo__date">{item.date}</div>
                <div className="todo__actions">
                    <button className="todo__delete" onClick={DeleteTodo}>Delete</button>
                    <button className="todo__edit" onClick={EditTodo}>Edit</button>
                </div>
            </div>
        </div>
    );
}


export const Todos = (props)=>{
    return (
        <div class="todolist__container">
            {props.todoList.map(item=>todo(item,props.todoList,props.setTodos,props.editMode))}
        </div>
    );
}