// JSX 주의 사항
// 1. 중괄호 {} 내부에는 자바스크립트 표현식만 넣을 수 있다. (조건문, 반복문 안 됨.)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (boolean, null, undefined는 렌더링되지 않는다.)
// 3. JSX 내부에서 객체는 렌더링되지 않는다. (obj.name과 같이 접근해야 한다.)
// 4. 모든 태그는 닫혀있어야 한다. (<h1>내용</h1>)
// 5. 최상위 태그는 반드시 하나여야만 한다.
import './Main.css';

const Main = () => {
    const user = {
        name: "Luca",
        isLogin : true,
    };

    if(user.isLogin){
        return (
            <>
            <div className="logout">Logout</div>
            </>
        );
    }else{
        return (
            <>
            <button className="login">Login</button>
            </>
        );
    }
};

export default Main;