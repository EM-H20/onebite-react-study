import './Editor.css';
import EmotionItem from "./EmotionItem";
import { useRef, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const emotionList = [
    {emotionId: 1, emotionName: "완전 좋음"},
    {emotionId: 2, emotionName: "좋음"},
    {emotionId: 3, emotionName: "보통"},
    {emotionId: 4, emotionName: "나쁨"},
    {emotionId: 5, emotionName: "완전 나쁨"},
];

const getStringedDate = (targetData) => {
    let year = targetData.getFullYear();
    let month = targetData.getMonth() + 1;
    let date = targetData.getDate();

    if(month < 10) month = `0${month}`;
    if(date < 10) date = `0${date}`;
    return `${year}-${month}-${date}`;
}

const Editor = ({onSubmit}) => {  
    const [input, setInput] = useState({
        createdDate : new Date(),
        content : "",
        emotionId : 3,

    });
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({...input, [name] : value});
    }

    return (
        <div className="Editor">    
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input type="date" value={getStringedDate(input.createdDate)} onChange={(e) => onChangeInput({
                    target : {
                        name : "createdDate",
                        value : new Date(e.target.value)
                    }
                })}/>
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem 
                        onClick= {() => onChangeInput({
                            target : {
                                name : "emotionId",
                                value : item.emotionId
                            }   
                        })}
                        key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId}/>
                    ))}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea placeholder='오늘의 일기를 입력해주세요' value={input.content} onChange={(e) => onChangeInput({
                    target : {
                        name : "content",
                        value : e.target.value
                    }
                })}/>
            </section>
            <section className='button_section'>
                <Button text="취소하기" onClick={() => navigate("/")}/>
                <Button text="저장하기" type="POSITIVE" onClick={() => onSubmit(input)}/>
            </section>
        </div>
    );
};

export default Editor;
