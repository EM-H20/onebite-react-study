import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
    const params = useParams();
    const navigate = useNavigate();

    usePageTitle(`${params.id}번 일기`);

    const currentData = useDiary(params.id);
    if(!currentData){
        return <div>일기를 찾을 수 없습니다.</div>
    }


    const {createdDate, content, emotionId} = currentData;

    return (
        <div>
            <Header
                title={getStringedDate(new Date(createdDate))}
                leftChild={
                    <Button text="< 뒤로가기" onClick={() => navigate(-1)} />
                }
                rightChild={
                    <Button text="수정하기" onClick={() => { navigate(`/edit/${params.id}`) }} />
                }
            />
            <Viewer emotionId={emotionId} content={content}/>
        </div>
    );
};

export default Diary;