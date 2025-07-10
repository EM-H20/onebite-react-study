import { useState, useRef, useReducer } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'
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

const reducer = (state, action) => {
    switch(action.type){
        case "CREATE" : 
            return [...state, action.data];
        case "UPDATE" : 
            return state.map((todo) => 
              todo.id === action.targetId ? 
            ({... todo, isDone : !todo.isDone}) : todo);
        case "DELETE" : 
            return state.filter((todo) => todo.id !== action.targetId);
        default : 
            return state;
    }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(2);

  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        content : content,
        isDone : false,
        date : new Date().getTime(),
        }
    });
  }

  const onUpdate = (targetId) =>{
    //todos State 중에 targetId와 일치하는 id를 가진 객체의 isDone 값을 반전
    dispatch({
      type : "UPDATE",
      targetId : targetId,
    })
  }

  const onDelete = (targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    dispatch({
      type : "DELETE",
      targetId : targetId,
    })
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      <Exam />
    </div>
  )
}

export default App
