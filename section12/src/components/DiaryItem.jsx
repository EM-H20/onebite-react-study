import './DiaryItem.css'
import {getEmotionImages} from "../util/get-emotion-images";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import Button from "./Button";

const DiaryItem = ({id, emotionId, createdDate, content}) => {
    const navigate = useNavigate();
    const { onDelete } = useContext(DiaryDispatchContext);

    return (
        <div className="DiaryItem">
            <div
                className={`img_section img_section_${emotionId}`}
                onClick={() => navigate(`/diary/${id}`)}
            >
                <img src={getEmotionImages(emotionId)} alt={`emotion-${emotionId}`} />
            </div>
            <div
                className="info_section"
                onClick={() => navigate(`/diary/${id}`)}
            >
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">{content}</div>
            </div>
            <div className="button_section">
                <Button
                    text="수정하기"
                    onClick={() => navigate(`/edit/${id}`)}
                />
                <Button
                    text="삭제하기"
                    type="NEGATIVE"
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    );
};

export default DiaryItem;