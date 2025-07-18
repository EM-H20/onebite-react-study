import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

import { Routes, Route } from 'react-router-dom'
import { useReducer, useRef, createContext } from 'react'

const mockData = [
  {
    id: 0,
    createdDate: new Date("2025-07-18"),
    content: '일기 1',
    emotionId: 1,
  },
  {
    id: 1,
    createdDate: new Date("2025-07-17"),
    content: '일기 2',
    emotionId: 2,
  },
  {
    id: 2,
    createdDate: new Date("2025-06-16"),
    content: '일기 3',
    emotionId: 3,
  },
];

function reducer(state, action){
  switch(action.type){
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) => (
        String(item.id) === String(action.data.id) ? action.data : item
      ));
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return state;
  }
}


export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  //여러개의 일기 데이터
  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, content, emotionId) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        createdDate : createdDate,
        content : content,
        emotionId : emotionId,
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, content, emotionId) => {
    dispatch({
      type : "UPDATE",
      data : {
        id : id,
        createdDate : createdDate,
        content : content,
        emotionId : emotionId,
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type : "DELETE",
      data : {
        id : id,
      }
    })
  }

  return (
    <>
    <DiaryStateContext value={data}>
      <DiaryDispatchContext value={{onCreate, onUpdate, onDelete}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Notfound />} />
      </Routes>
      </DiaryDispatchContext>
    </DiaryStateContext>
    </>
  )
}

export default App
