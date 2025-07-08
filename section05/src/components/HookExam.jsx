// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수는 없다. (반복문, 조건문 안에서 호출 안 됨)
// 3. 나만의 훅 (Custom Hook)을 직접 만들 수 있다.

import useInput from "../hooks/useInput";

const HookExam = () => {
    const [count, onChangeCount] = useInput();
    
    return (
        <div>
            <h1>Hook Exam</h1>
            <h2>{count}</h2>
            <button onClick={onChangeCount}>증가</button>
        </div>
    );
};

export default HookExam;