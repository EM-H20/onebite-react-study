import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react'

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState('');
    const onSearch = (e) => {
        setSearch(e.target.value);
    }
    const getFilteredData = () => {
        if(search === '') {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onSearch}/>
            <div className='todos_wrapper'>
                {getFilteredData().map((todo) => 
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                )}
            </div>
        </div>                                    
    )
}

export default List