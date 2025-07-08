// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
    const[input, setInput] = useState({
        name: "",
        birth: "2025-01-01",
        nationality: "",
        introduce: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };  
    
    const onSubmit = () => {
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
            return;
        }
        alert(input.name + " " + input.birth + " " + input.nationality + " " + input.introduce);
        // alert(JSON.stringify(input));
    };

    return (
        <div>
            <button onClick={() => {
                countRef.current++;
                console.log(countRef.current);
            }}>add</button>
            
            <h1>Register</h1>
            <input ref={inputRef} name="name" onChange={onChange} type="text" placeholder="Name"/> <hr/>
            <input name="birth" onChange={onChange} type="date" placeholder="Birth" value={input.birth}/> <hr/>
            <select name="nationality" onChange={onChange}>
                <option value="">국적을 선택해주세요</option>
                <option value="Korea">한국</option>
                <option value="USA">미국</option>
                <option value="China">중국</option>
            </select> <hr/>
            <textarea name="introduce" onChange={onChange} placeholder="Introduce"></textarea> <hr/>
            <button onClick={onSubmit}>Register</button>
        </div>
    );
};

export default Register;
