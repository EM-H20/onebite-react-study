import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(2);

  const onCreate = useCallback((content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        content : content,
        isDone : false,
        date : new Date().getTime(),
        }
    });
  }, []);

  const onUpdate = useCallback((targetId) =>{
    //todos State 중에 targetId와 일치하는 id를 가진 객체의 isDone 값을 반전
    dispatch({
      type : "UPDATE",
      targetId : targetId,
    })
  }, []);

  const onDelete = useCallback((targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    dispatch({
      type : "DELETE",
      targetId : targetId,
    })
  }, []);

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onDelete, onUpdate}
  }, []);
  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
          <Exam />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
