import styles from './index.module.scss';
import arrowIcon from '../../../arrow.png';
import DeleteTodoButton from '../../atoms/DeleteTodoButton';
import { useDispatch } from 'react-redux';
import { doneFlag } from '../../../modules/task';
import { useState, useEffect } from 'react';

function Item(props) {

    const layerNum = props.task.layer

    const [targetId, setTargetId] = useState(0)

    useEffect(() => {
        setTargetId([props.task.id, ...props.task.childIds])
    }, [])

    const dispatch = useDispatch();

    const dispatchDoneFlag = (targetId) => {
        dispatch(doneFlag(targetId))
    }

    return(
        <>
            <li key={props.task.id} className={`${styles.item} ${styles["item--layer" + layerNum]}`}> 
                <div className={styles.item__arrowIconWrapper}>
                    {props.task.childIds.length? 
                        <img src={arrowIcon} className={styles.item__arrowIcon} width="10px" height="10px"/> 
                        : 
                        ""
                    }
                </div>
                <input type='radio' className={styles.item__checkbox} onClick={() => dispatchDoneFlag(targetId)} />
                <div className={styles.item__content}>
                    {props.task.content}
                </div>
                <div className={styles.item__deleteBtnWrapper}>
                    <DeleteTodoButton targetId={props.task.id} childIds={props.task.childIds}/>
                </div>
            </li>
        </>
    );
}

export default Item;