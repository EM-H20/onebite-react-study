// App.jsx

import './App.css'
import Welcome from './components/Welcome'
function App() {

  return (
    <>
    <Welcome name={"엘리페어"} isMember={true}/>
    <Welcome name={"엘리페어"} isMember={false}/>
    </>
  )
}

export default App
