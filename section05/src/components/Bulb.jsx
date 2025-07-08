import { useState } from 'react';

const Bulb = () => {
    const [light, setLight] = useState(false);
    console.log(light);
  
    return (
      <div style={{backgroundColor : light ? "black" : "red"}}>
        {light ? (<h1 style={{color : "yellow"}}>ON</h1>) : (<h1 style={{color : "blue"}}>OFF</h1>)}
        <button onClick={() => {
          setLight(!light);
        }}>{light ? "끄기" : "켜기"}</button>
      </div>
    )
}

export default Bulb;
