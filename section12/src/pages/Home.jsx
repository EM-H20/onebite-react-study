import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
    return data.filter((item) => {
        return beginTime <= item.createdDate && item.createdDate <= endTime;
    });
}

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext);

    const monthlyData = getMonthlyData(pivotDate, data);

    const onLeftClick = () => {
        setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
    }

    const onRightClick = () => {
        setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
    }

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button text={"<"} onClick={onLeftClick} />}
                rightChild={<Button text={">"} onClick={onRightClick} />}
            />
            <DiaryList data={monthlyData}/>
        </div>
    );
};

export default Home;