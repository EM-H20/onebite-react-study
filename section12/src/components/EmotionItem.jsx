import './EmotionItem.css';
import { getEmotionImages } from "../util/get-emotion-images";

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
    return (
        <div onClick={onClick} className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ''}`}>  
            <img className='emotion_img' src={getEmotionImages(emotionId)} alt={`emotion-${emotionId}`} />
            <div className='emotion_name'>{emotionName}</div>
        </div>
    );
};

export default EmotionItem;