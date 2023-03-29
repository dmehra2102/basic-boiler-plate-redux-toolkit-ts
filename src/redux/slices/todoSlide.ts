import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface todoState {
    todoList : string[];
}

const initialState: todoState = {
    todoList : ["Learn React","Do Meditation"]
};

const todoSlice = createSlice({
    name : "todoApp",
    initialState,
    reducers : {
        AddNewTodo (state:todoState, action:PayloadAction<string>){
            state.todoList = [...state.todoList,action.payload];
        }
    }
});

export const {AddNewTodo} = todoSlice.actions;

export default todoSlice.reducer;