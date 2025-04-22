import React from 'react';

export default function TodoItem({todo, updateTodo, deleteTodo}) {
    const { id, text, date, state } = todo

    const onClickDeleteButton = (todo) => {
        deleteTodo(todo)
    }

    const onChangeCheckbox = (todo) => {
        updateTodo({...todo, state:!todo.state})
    }

    return (
        <li className='list-item'>
            <input type="checkbox" checked={state} onChange={()=>{onChangeCheckbox(todo)}}/>
            <span className='text'>{text}</span>
            <span className='date'>{date}</span>
            <button type='button' onClick={()=>{onClickDeleteButton(todo)}}>delete</button>
        </li>
    );
}

