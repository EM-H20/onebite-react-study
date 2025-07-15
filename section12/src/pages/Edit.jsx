import { useParams } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    return (
        <div>
            <h1>Edit</h1>
            <h3>Edit 페이지는 {params.id}번 일기입니다.</h3>
        </div>
    );
};

export default Edit;