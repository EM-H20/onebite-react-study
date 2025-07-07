import './App.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';

function App() {
  const buttonProps = {
    text : "메일",
    color : "red",
    a : 1,
    b : 2,
    c : 3,
  };

  return (
    <>
      <Header />
      <Main />
      <Button {...buttonProps}/>
      <Button {...buttonProps} text = {"카페"} color = {"blue"}/>
      <Button {...buttonProps} text = {"블로그"} color = {"green"}>
        <div>자식요소</div>
      </Button>


      <Footer />
    </>
  );
}

export default App
