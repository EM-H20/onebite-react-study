import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo, useContext } from 'react'
import { TodoStateContext } from '../App'


const List = () => {
    const todos = useContext(TodoStateContext);
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

    // const getAnalyzedData = () => {
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter(todo => todo.isDone).length;
    //     const notDontCount = totalCount-doneCount;

    //     return {
    //         totalCount, doneCount, notDontCount
    //     }
    // }
    const {totalCount, doneCount, notDontCount } = useMemo(()=>{
        console.log("호출");
        const totalCount = todos.length;
        const doneCount = todos.filter(todo => todo.isDone).length;
        const notDontCount = totalCount-doneCount;

        return {
            totalCount, doneCount, notDontCount
        }
    }, [todos]);
    // 의존성배역 : deps, 배열이 바뀌면 콜백 함수를 다시 실행하는 Hooks


    // const {totalCount, doneCount, notDontCount} =  getAnalyzedData();
    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>total = {totalCount}</div>
            <div>doneCount = {doneCount}</div>
            <div>notDontCount = {notDontCount}</div>
            <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onSearch}/>
            <div className='todos_wrapper'>
                {getFilteredData().map((todo) => 
                    <TodoItem key={todo.id} {...todo} />
                )}
            </div>
        </div>                                    
    )
}

export default List