// Welcome.jsx
const Welcome = ({name, isMember = false}) => {
    return (
        <h1>{name}님 {isMember ? '다시 오셨군요' : '가입하시겠어요?'}</h1>
    );
};

export default Welcome;