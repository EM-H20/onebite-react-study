// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [nationality, setNationality] = useState("");
    const [introduce, setIntroduce] = useState("");
    
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };

    const onChangeNationality = (e) => {
        setNationality(e.target.value);
    };

    const onChangeIntroduce = (e) => {
        setIntroduce(e.target.value);
    };

    const onSubmit = () => {
        console.log({name, birth, nationality, introduce});
    };

    return (
        <div>
            <h1>Register</h1>
            <input onChange={onChangeName} type="text" placeholder="Name"/> <hr/>
            <input onChange={onChangeBirth} type="date" placeholder="Birth"/> <hr/>
            <select onChange={onChangeNationality}>
                <option value="">국적을 선택해주세요</option>
                <option value="Korea">한국</option>
                <option value="USA">미국</option>
                <option value="China">중국</option>
            </select> <hr/>
            <textarea onChange={onChangeIntroduce} placeholder="Introduce"></textarea> <hr/>
            <button onClick={onSubmit}>Register</button>
        </div>
    );
};

export default Register;
