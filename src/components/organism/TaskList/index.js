import { useSelector, useDispatch } from "react-redux";
import styles from './index.module.scss';
import Item from '../../molecules/Item/index';
import AddTodoButton from '../../atoms/AddTodoButton'
import { addTask } from '../../../modules/task';

function TaskList() {

    // storeから状態を取得
    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    const dispatchAddTask = (newTasks) => {
        dispatch(addTask(newTasks))
    }

    return(
        <div className={styles.taskList}>
            <div className={styles.taskList__container}>
                <h2 className={styles.taskList__header}>Task List</h2>
                <div className={styles.taskList__body}>
                    <ul className={styles.taskList__list}>
                        {tasks.map((task) => {
                            if(!task.doneFlag){
                                return (
                                    <Item task={task}/>     
                                );
                            }
                        })}
                    </ul>
                    <AddTodoButton tasks={tasks} dispatchAddTask={dispatchAddTask}/>
                </div>
            </div>
        </div>
    );
};

// 削除機能
const deleteTodo = (todos, setTodos, targetId) => (e) => {
    e.preventDefault();
    console.log(todos)
    const newTodos = todos.filter(todo => {
        return todo.id !== Number(targetId);
    })
    setTodos(newTodos);
    console.log(todos)
}

export default TaskList;