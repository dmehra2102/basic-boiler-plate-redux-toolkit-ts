import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hook';
import { AddNewTodo } from '../redux/slices/todoSlide';

const AddTodo = () => {
    const [todoName, setTodoName] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        if(todoName){
            dispatch(AddNewTodo(todoName));
        }   
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <label> Add Todo : <input type="text" required onChange={(e) => { setTodoName(e.target.value) }} /></label>
                <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default AddTodo