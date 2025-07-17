import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;