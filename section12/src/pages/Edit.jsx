import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    
    const currentData = useDiary(params.id);
    
    const onClickDelete = () => {
        const result = window.confirm("일기를 정말 삭제할까요? 다시 복구 되지 않아요!");

        if(result){
            onDelete(params.id);
            navigate("/", {replace : true});
        }
    }
    
    const onSubmit = (input) => {
        if(
            window.confirm("일기를 정말 수정할까요?")
        ){
            onUpdate(params.id, input.createdDate.getTime(), input.content, input.emotionId);
            navigate("/", {replace : true});
        }
    }
    
    usePageTitle(`${params.id}번 일기 수정`);
    
    return (
        <div>
            <Header
                title="일기 수정하기"
                leftChild={<Button text="< 뒤로가기" onClick={() => navigate(-1)}/>}
                rightChild={<Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete}/>}
            />
            <Editor initData={currentData} onSubmit={onSubmit}/>
        </div>
    );
};

export default Edit;