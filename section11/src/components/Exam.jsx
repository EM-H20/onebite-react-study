import { useReducer } from "react";

//reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action){
    switch(action.type){
        case "INCREASE" : 
            return state + action.data;
        case "DECREASE" : 
            return state - action.data;
        default : 
            return state;
    }
}   

const Exam = () => {
    // dispatch : 발송하다, 급송하다
    // -> 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);
    const onClickPlus = () => {
        dispatch({
            type : "INCREASE",
            data : 1
        });
    }
    const onClickMinus = () => {
        dispatch({
            type : "DECREASE",
            data : 1
        });
    }   
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>증가</button>
            <button onClick={onClickMinus}>감소</button>
        </div>
    )
}

export default Exam;
