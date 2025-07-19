import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const navigate = useNavigate();
    
    const data = useContext(DiaryStateContext);
    const [currentData, setCurrentData] = useState(null);
    
    useEffect(() => {
        const currentData = data.find((item) => String(item.id) === String(id)); 
    
            if(!currentData){
                window.alert("일기를 찾을 수 없습니다.");
                navigate("/", {replace : true});
            }
    
            setCurrentData(currentData);
        }, [id]);

        return currentData;
};

export default useDiary;
