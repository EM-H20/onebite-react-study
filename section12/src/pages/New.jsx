import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    const navigate = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);

    usePageTitle("새 일기 쓰기");
    
    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.content, input.emotionId);
        navigate("/");
    }
    return (
        <div>
            <Header 
            title={"새 일기 쓰기"} 
            leftChild={<Button text="< 뒤로가기" onClick={() => navigate(-1)}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};

export default New;