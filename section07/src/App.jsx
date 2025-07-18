import './App.css'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import Even from "./components/Even"
import { useState, useEffect, useRef } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

 // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("마운트");
  }, []);
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("업데이트");
  }, [count]);
  // 3. 언마운트 : 죽음
 

  const onClickButton = (value) => {
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
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </section>
    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
    </section>

    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
  </div>
  )
}

export default App
