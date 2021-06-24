import { createSlice, current } from "@reduxjs/toolkit";
import mockDatas from '../components/templates/mock'

const initialState = mockDatas.todoTasks

const taskSlice = createSlice({
    name: "task",
    initialState, 
    reducers: {
        addTask: (state, action) => {
            
            // 新しいタスクの要素番号
            const num = action.payload.length - 1

            const newTask = {
                id: action.payload[num].id,
                doneFlag: false,
                content: action.payload[num].content,
                layer: 1,
                childIds: []
            }
            
            // storeの状態を更新
            return [...state, newTask]
            
        },
        deleteTask: (state, action) => {

            // 対象タスクの親要素と小要素のID（配列）を取得
            const targetId = action.payload
            
            // 対象のタスクを削除後のタスク郡を配列として格納
            const newTask = state.filter(todo => {
                return !targetId.includes(todo.id)
            })

            // storeの状態を更新
            return state = [...newTask]
        },
        doneFlag: (state, action) => {

            // 対象タスクの親要素と小要素のID（配列）を取得
            const targetId = action.payload

            // 対象タスクのdoneFlagをtrueにした後のタスク郡を配列として格納
            const newTask = state.map((currentState) => {

                if(targetId.includes(currentState.id)) {
                    return {...currentState, doneFlag: true };
                }
                return currentState
            })

            // storeの状態を更新
            return state = newTask
        },
    }
})

export const {addTask, deleteTask, doneFlag} = taskSlice.actions

export const taskReducer = taskSlice.reducer;