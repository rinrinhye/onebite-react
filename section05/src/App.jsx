import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Register from './components/Register';
import State from './components/State';

function App() {
  const buttonProps = {
    text: '블로그',
    color: 'tomato',
  };

  return (
    <>
      {/* <State /> */}
      <Register />
    </>
  );
}

export default App;

// jsx 주의사항
// 1. 중괄호 내부에는 표현식 : 값으로 평가
// 2. 숫자, 문자열, 배열 값만 렌더링 => null, undefined,true,false 렌더링 X
