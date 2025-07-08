import { useState } from "react";

function useInput(){
    const [count, setCount] = useState(0);

    const onChangeCount = (e) => {
        setCount(count + 1);
    };

    return [count, onChangeCount];
}

export default useInput;
