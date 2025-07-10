import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './App.css'

const mockData = [
  {
    id: 0,
    content: 'React 공부하기',
    isDone: false  ,
    date : new Date().getTime(),
  },
  {
    id: 1,
    content: '리액트 공부하기',
    isDone: false  ,
    date : new Date().getTime(),
  }
];

function App() {
 
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      content : content,
      isDone : false,
      date : new Date().getTime(),
    }
    setTodos([...todos, newTodo])
  }

  const onUpdate = (targetId) =>{
    //todos State 중에 targetId와 일치하는 id를 가진 객체의 isDone 값을 반전
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo));
  }

  const onDelete = (targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
