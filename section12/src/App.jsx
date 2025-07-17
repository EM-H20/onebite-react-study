import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

import Button from './components/Button'
import Header from './components/Header'

import { Routes, Route, Link, useNavigate } from 'react-router-dom'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 추가하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  const navigate = useNavigate();

  
  return (
    <>
    <Header 
    title="일기" 
    leftChild={<Button text={"Left"}/>} 
    rightChild={<Button text={"Right"}/>}/>

    <Button text="Button" type="DEFAULT" onClick={() => navigate("/new")}/>

    <Button text="Button" type="POSITIVE" onClick={() => navigate("/new")}/>

    <Button text="Button" type="NEGATIVE" onClick={() => navigate("/new")}/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
    </Routes>
    </>
  )
}

export default App
