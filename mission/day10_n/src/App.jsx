// App.jsx

import './App.css'
import Welcome from './components/Welcome'
import OrderEditor from './components/OrderEditor'
import ExchangeRate from './components/ExchangeRate' 

function App() {

  return (
    <div>
      <section>
        <Welcome name={"엘리페어"} isMember={true} />
        <Welcome name={"엘리페어"} isMember={false} />
      </section>
      <section>
        <OrderEditor />
      </section>
      <section>
        <ExchangeRate />
      </section>
    </div>
  )
}

export default App
