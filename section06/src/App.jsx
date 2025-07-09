import './App.css'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  const onChangeCount = (value) => {
    if(!value){
      setCount(0);
      return;
    }
    setCount(count + value);
  }

  return (
  <div className='App'> 
    <h1>Simple Counter</h1>
    <section>
      <Viewer count={count}/>
    </section>

    <section>
      <Controller onChangeCount={onChangeCount}/>
    </section>
  </div>
  )
}

export default App
