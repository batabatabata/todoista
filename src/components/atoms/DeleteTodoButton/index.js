import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../modules/task";
import styles from './index.module.scss';

const DeleteTodoButton = (props) => {

    // 削除対象のタスクIDを状態として管理
    const [targetId, setTargetId] = useState(0)

    // 削除対象のタスクID（状態）を選択したIDに更新
    useEffect(() => {
        setTargetId([props.targetId, ...props.childIds])
    }, [])

    const dispatch = useDispatch();

    const dispatchDeleteTask = (targetId) => {
        dispatch(deleteTask(targetId))
    }

    return(
        <button className={styles.deleteBtn} onClick={() => dispatchDeleteTask(targetId)}>削除</button>
    );

}

export default DeleteTodoButton