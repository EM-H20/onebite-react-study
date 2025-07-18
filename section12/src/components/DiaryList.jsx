import './DiaryList.css'
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ data }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const sortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === "latest") {
                return Number(b.createdDate) - Number(a.createdDate);
            } else {
                return Number(a.createdDate) - Number(b.createdDate);
            }
        });
    }
    return (
        <div className="DiaryList">
            <div className="DiaryList_menu">
                <select value={sortType} onChange={(e) => {setSortType(e.target.value)}}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
                <Button text="새로운 일기" type="POSITIVE" onClick={() => {navigate(`/new`)}} />
            </div>
            
            <div className="DiaryList_list">
                {sortedData().map((item) => (
                    <DiaryItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default DiaryList;