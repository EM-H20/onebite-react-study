import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 추가하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  const navigate = useNavigate();

  
  return (
    <>
    <div>
      <Link to={"/"}>Home </Link>
      <Link to={"/new"}>New </Link>
      <Link to={"/diary"}>Diary </Link>
      <Link to={"/edit"}>Edit </Link>
    </div>
    <button onClick={() => navigate("/new")}>New 페이지로 이동</button>

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
