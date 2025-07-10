import './TodoItem.css'
const TodoItem = ({id, content, isDone, date, onUpdate, onDelete}) => {

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

export default TodoItem