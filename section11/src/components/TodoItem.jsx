import './TodoItem.css'
import {memo, useContext} from 'react'
import { TodoDispatchContext } from '../App'

const TodoItem = ({id, content, isDone, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onDeleteTodo = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toDateString()}</div>
            <button onClick={onDeleteTodo}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);
// export default memo(TodoItem, (prevProps, nextProps) => {
//     //변환 값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//     // T -> Props 바뀌지 않음 = 리렌터링 X
//     // F -> Props 바뀜 = 리렌터링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });