// App.jsx

import './App.css'
import Welcome from './components/Welcome'
import OrderEditor from './components/OrderEditor'
function App() {

  return (
    <>
    <Welcome name={"엘리페어"} isMember={true}/>
    <Welcome name={"엘리페어"} isMember={false}/>
    <OrderEditor/>
    </>
  )
}

export default App
