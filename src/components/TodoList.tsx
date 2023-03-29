import React from 'react'
import { useAppSelector } from '../redux/hook'

const TodoList = () => {
    const { todoList } = useAppSelector((state) => state.todo);
    return (
        <div>
            {todoList.map((todo, index) => {
                return (
                    <div key={index}>
                        <p><span>{index + 1}</span> {todo}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList