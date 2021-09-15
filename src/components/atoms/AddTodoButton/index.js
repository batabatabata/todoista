import {useState} from 'react';
import styles from './index.module.scss'

function AddTodoButton(props) {

    const [content, setContent] = useState("");
    const [tasks, setTasks] = [props.tasks, props.dispatchAddTask];
    
    return(
        <form className={styles.addForm} onSubmit={addTodo(tasks, setTasks, content)}>
            <input className={styles.addForm__input} onChange={handleChange(setContent)} name="contents" value={content} placeholder="タスク名"/>
            <div className={styles.addForm__btnWrapper}>
                <button className={styles.addForm__btn} {...(content ? {active: true} : {disabled: true})}>タスクを追加</button>
            </div>
        </form>
    )
}

const addTodo = (tasks, setTasks, content) => (e) => {
    e.preventDefault();
    const id = Math.max(...tasks.map(todo => todo.id)) + 1;
    setTasks([
        ...tasks, {
            id: id,
            doneFlag: false,
            content: content,
            layer: 1,
            childIds: []
        }
    ])
}

const handleChange = (setter) => (e) => {
    const newValue = e.target.value;
    setter(newValue);
}

export default AddTodoButton