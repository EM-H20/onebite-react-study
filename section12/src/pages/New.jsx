import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const navigate = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.content, input.emotionId);
        navigate("/");
    }
    return (
        <div>
            <Header 
            title="새 일기 쓰기" 
            leftChild={<Button text="< 뒤로가기" onClick={() => navigate("/")}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};

export default New;