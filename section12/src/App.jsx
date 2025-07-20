import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

import { Routes, Route } from 'react-router-dom'
import { useReducer, useRef, createContext, useEffect, useState } from 'react'

function reducer(state, action){
  let newState;
  switch(action.type){
    case "CREATE":
      newState = [...state, action.data];
      break;
    case "UPDATE":
      newState = state.map((item) => (
        String(item.id) === String(action.data.id) ? action.data : item
      ));
      break;
    case "DELETE":
      newState = state.filter((item) => String(item.id) !== String(action.data.id));
      break;
    case "INIT":
      return action.data;
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
}


export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //여러개의 일기 데이터
  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  useEffect(() => {
    const savedData = localStorage.getItem("diary");
    if (!savedData) {
      setIsLoading(false);
     return;
    }
    const parsedData = JSON.parse(savedData);
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    idRef.current = parsedData[parsedData.length - 1].id + 1;
    dispatch({type : "INIT", data : parsedData});
    setIsLoading(false);
  }, []);

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
    {isLoading ? (
      <div>Loading...</div>
    ) : (
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
    )}
    </>
  )
}

export default App
